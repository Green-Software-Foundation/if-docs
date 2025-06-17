---
sidebar_position: 9
---

# How to use Impact Framework with Docker containers

The Impact Framework API server can be run as a Docker container, making it easy to deploy in containerized environments.

## Official Container Image

The official container image is provided at `ghcr.io/green-software-foundation/if`.

## Running the Container

### Basic Usage

Run a container using the official image:

```sh
# Run with default port (3000)
$ docker run --rm -p 3000:3000 ghcr.io/green-software-foundation/if

# Run with custom port mapping
$ docker run --rm -p 8080:3000 ghcr.io/green-software-foundation/if
```

### Running with Command Arguments

When specifying arguments for the `if-api` command, you need to include the `if-api` command as shown below:

```sh
# Run without external plugin warning
$ docker run --rm -p 3000:3000 ghcr.io/green-software-foundation/if if-api --disableExternalPluginWarning

# Run with custom host and port
$ docker run --rm -p 8080:3000 ghcr.io/green-software-foundation/if if-api --host 0.0.0.0 --port 3000
```

## Using the Containerized API Server

The containerized API server provides the same endpoints as the regular API server:

```sh
# Process manifest
$ curl -H "Content-Type: application/yaml" --data-binary @manifest.yaml http://localhost:3000/v1/run

# Health check endpoint
$ curl http://localhost:3000/health
```

## Adding External Plugins at Startup

You can add external plugins at container startup by mounting a file that lists the plugins to `/app/plugins.txt`.

### Installing Public npm Packages

```sh
$ cat plugins.txt
carbon-intensity-plugin
@company/my-plugin

$ docker run --rm -p 3000:3000 -v $(pwd)/plugins.txt:/app/plugins.txt ghcr.io/green-software-foundation/if
```

The contents of `/app/plugins.txt` are used directly as arguments for `npm install`. For available formats, refer to the [npm install documentation](https://docs.npmjs.com/cli/v8/commands/npm-install).

### Installing Private Packages

If the plugin or its dependencies are private, mount an `.npmrc` file at `/app/.npmrc` with the required access token:

```sh
$ cat plugins.txt
@myscope/myplugin

$ cat .npmrc
//registry.npmjs.org/:_authToken=<YOUR_AUTH_TOKEN>
@myscope:registry=https://registry.npmjs.org/

$ docker run --rm -p 3000:3000 \
  -v $(pwd)/plugins.txt:/app/plugins.txt \
  -v $(pwd)/.npmrc:/app/.npmrc \
  ghcr.io/green-software-foundation/if
```

For `.npmrc` format reference, see the [npmrc documentation](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc).

### Installing from GitHub Packages

For packages in GitHub Packages, a personal access token (classic) with `read:packages` permission is required even for public packages:

```sh
$ cat plugins.txt
danuw/if-casdk-plugin

$ cat .npmrc
//npm.pkg.github.com/:_authToken=<YOUR_PERSONAL_ACCESS_TOKEN>
@Green-Software-Foundation:registry=https://npm.pkg.github.com/

$ docker run --rm -p 3000:3000 \
  -v $(pwd)/plugins.txt:/app/plugins.txt \
  -v $(pwd)/.npmrc:/app/.npmrc \
  ghcr.io/green-software-foundation/if
```

### Using Environment Variables for Tokens

Alternatively, you can extract the access token to an environment variable (though this is not recommended for security reasons):

```sh
$ cat plugins.txt
@myscope/myplugin

$ cat .npmrc
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@myscope:registry=https://registry.npmjs.org/

$ docker run --rm -p 3000:3000 \
  -v $(pwd)/plugins.txt:/app/plugins.txt \
  -v $(pwd)/.npmrc:/app/.npmrc \
  -e NODE_AUTH_TOKEN=<YOUR_AUTH_TOKEN> \
  ghcr.io/green-software-foundation/if
```

> **Security Note**: Using environment variables for tokens is not recommended as they can easily leak through `ps` commands, `/proc` filesystem, memory dumps, etc.

## Running Other Commands

The container can execute IF commands other than the API server:

```sh
# Run if-run command
$ docker run --rm -v $(pwd)/manifest.yaml:/app/manifest.yaml \
  ghcr.io/green-software-foundation/if if-run -m manifest.yaml

# Run if-check command
$ docker run --rm -v $(pwd)/manifest.yaml:/app/manifest.yaml \
  ghcr.io/green-software-foundation/if if-check -m manifest.yaml

# Run if-diff command
$ docker run --rm \
  -v $(pwd)/manifest1.yaml:/app/manifest1.yaml \
  -v $(pwd)/manifest2.yaml:/app/manifest2.yaml \
  ghcr.io/green-software-foundation/if if-diff -s manifest1.yaml -t manifest2.yaml
```

## Security Considerations

For security reasons, certain builtin plugins are disabled by default in the API server:

- `Shell` - Prevents arbitrary command execution
- `CSVImport` - Prevents reading arbitrary files
- `CSVLookup` - Prevents reading arbitrary files

These plugins can be enabled if needed, but should be used with caution in production environments.

## Custom Container Images

If you need to build custom container images with pre-installed plugins for faster startup times, or want to create optimized images for your specific use case, see the [developer documentation for building container images](./how-to-build-container-images.md).

## Troubleshooting

### Plugin Installation Issues

If external plugins fail to install:

1. Check that the plugin name is correct in `plugins.txt`
2. Verify authentication tokens in `.npmrc` if accessing private packages
3. Ensure the plugin is compatible with the IF version in the container
4. Check container logs for detailed error messages

### Network Connectivity

If the API server is not accessible:

1. Verify port mapping is correct (`-p host:container`)
2. Check that the container is listening on `0.0.0.0` not just `localhost`
3. Ensure firewall rules allow traffic on the specified port
