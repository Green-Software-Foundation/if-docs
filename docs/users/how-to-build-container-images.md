---
sidebar_position: 10
---

# How to build custom container images

While official images are available, you can build your own container images using the provided `Dockerfile` for customization or optimization purposes.

## Building the Standard Container Image

The repository includes a `Dockerfile` for building your own container image:

```sh
# Build the container image
$ docker build -t myorg/if:v1.0.0 .
```

## Building Slim Images

The default container image includes the git command to enable installation of external plugins from git repositories such as GitHub at startup. If you don't need to install external plugins from git repositories during startup, you can create a slimmer container image without git:

```sh
# Build custom image without git
$ docker build -t myorg/if:v1.0.0-slim --build-arg PACKAGES= .
```

> **Note**: The absence of git does not affect the installation of npm packages.

Example of using the slim image with npm packages:

```sh
$ cat plugins-startup.txt
carbon-intensity-plugin

$ docker run --rm -p 3000:3000 \
  -v $(pwd)/plugins-startup.txt:/app/plugins.txt \
  myorg/if:v1.0.0-slim
```

## Building Images with Pre-installed Plugins

For production environments where fast startup is critical, you can build container images with external plugins pre-installed. This eliminates the plugin installation time during container startup.

### Using the with-plugins Dockerfile

A specialized `Dockerfile` for building container images with external plugins is provided in the `with-plugins` directory:

```sh
# Create plugin list
$ cat with-plugins/plugins.txt
carbon-intensity-plugin
Green-Software-Foundation/if-github-plugin

# Build image with pre-installed plugins
$ docker build -t myorg/if-with-plugins:v1.0.0 with-plugins
```

### Adding Private Plugins

If you need to install private plugins, create a `with-plugins/.npmrc` file:

```sh
$ cat with-plugins/plugins.txt
danuw/if-casdk-plugin

$ cat with-plugins/.npmrc
//npm.pkg.github.com/:_authToken=<YOUR_PERSONAL_ACCESS_TOKEN>
@Green-Software-Foundation:registry=https://npm.pkg.github.com/

$ docker build -t myorg/if-with-plugins:v1.0.0 with-plugins
```

> **Security Note**: The `.npmrc` file is only used during the build process and is not included in the final container image.

### Customizing Base Images

You can customize the base images used in the build process:

```sh
$ docker build -t myorg/if-with-plugins:v1.0.0 \
  --build-arg BUILDBASEIMAGE=myorg/if:v1.0.0 \
  --build-arg BASEIMAGE=node:20-slim \
  with-plugins
```

Parameters:
- `BUILDBASEIMAGE`: Base image used for installing plugins (default: official IF image)
- `BASEIMAGE`: Base image for the final container (default: `node:18-slim`)

### Building Slim Images with Pre-installed Plugins

You can also create slim images without git while having pre-installed plugins:

```sh
$ docker build -t myorg/if-with-plugins:v1.0.0-slim \
  --build-arg PACKAGES= \
  with-plugins
```

## Testing Custom Images

Test your custom images to ensure they work correctly:

```sh
# Test API server functionality
$ docker run --rm -p 3000:3000 myorg/if:v1.0.0 &
$ curl -H "Content-Type: application/yaml" \
  --data-binary @test-manifest.yaml \
  http://localhost:3000/v1/run

# Test CLI commands
$ docker run --rm \
  -v $(pwd)/manifest.yaml:/app/manifest.yaml \
  myorg/if:v1.0.0 if-run -m manifest.yaml
```
