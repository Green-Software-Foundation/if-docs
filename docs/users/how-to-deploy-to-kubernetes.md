---
sidebar_position: 11
---

# How to deploy Impact Framework to Kubernetes

The Impact Framework provides a Helm chart for easy deployment on Kubernetes clusters, making it simple to run the API server in containerized environments.

## Prerequisites

Before deploying to Kubernetes, ensure you have:

- A running Kubernetes cluster
- `kubectl` configured to access your cluster
- Helm 3.x installed
- Appropriate permissions to deploy resources in your namespace

## Quick Start

### Basic Deployment

The Helm chart is provided in OCI format on GitHub Container Registry. Deploy with default settings:

```sh
$ helm install if oci://ghcr.io/green-software-foundation/charts/if
```

This creates:
- A Deployment running the IF API server
- A ClusterIP Service for internal cluster access
- Optional ConfigMaps for configuration
- Optional Secrets for authentication

### Verify Deployment

Check that the deployment is running:

```sh
$ kubectl get pods -l app.kubernetes.io/name=if
$ kubectl get services -l app.kubernetes.io/name=if
```

## Accessing the API Server

By default, a `ClusterIP` service is deployed for internal cluster communication. To access the API Server from the outside, it must be accessed by one of the following methods

### External Access via Port Forward

For development and testing, use port forwarding:

```sh
$ kubectl port-forward svc/if 3000:3000 &
$ curl -H "Content-Type: application/yaml" --data-binary @manifest.yaml http://localhost:3000/v1/run
```

### External Access via NodePort

For external access without load balancers, use NodePort:

```yaml
# values-nodeport.yaml
service:
  type: NodePort
  nodePort: 32000
```

```sh
$ helm upgrade if oci://ghcr.io/green-software-foundation/charts/if -f values-nodeport.yaml
```

Access the service at `http://<node-ip>:32000`

### External Access via LoadBalancer

For production external access, use LoadBalancer:

```yaml
# values-loadbalancer.yaml
service:
  type: LoadBalancer
```

```sh
$ helm upgrade if oci://ghcr.io/green-software-foundation/charts/if -f values-loadbalancer.yaml
```

Get the external IP:

```sh
$ kubectl get services if
```

### External Access via Ingress

Expose the service via Ingress:

```yaml
# values-ingress.yaml
ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
  hosts:
    - host: if.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: if-tls
      hosts:
        - if.example.com
```

Refer to the respective Ingress Controller documentation for Ingress configuration.

## Plugin Management

### Installing External Plugins

Add external plugins that will be installed at pod startup:

```yaml
# values-plugins.yaml
additionalPlugins:
  - carbon-intensity-plugin
  - Green-Software-Foundation/if-github-plugin
```

### Installing Private Packages

For private plugins from npm registry, configure authentication:

```yaml
# values-private-plugins.yaml
additionalPlugins:
  - "@myscope/myplugin"

npmrc: |
  //registry.npmjs.org/:_authToken=<YOUR_AUTH_TOKEN>
  @myscope:registry=https://registry.npmjs.org/
```

### Installing from GitHub Packages

For packages in GitHub Packages, a personal access token (classic) with `read:packages` permission is required even for public packages:

```yaml
# values-github-packages.yaml
additionalPlugins:
  - Green-Software-Foundation/community-plugins
  - danuw/if-casdk-plugin

npmrc: |
  //npm.pkg.github.com/:_authToken=<YOUR_PERSONAL_ACCESS_TOKEN>
  @Green-Software-Foundation:registry=https://npm.pkg.github.com/
```

### Using Environment Variables for Tokens

Extract tokens to environment variables for better security:

```yaml
# values-env-auth.yaml
additionalPlugins:
  - Green-Software-Foundation/community-plugins

npmrc: |
  //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
  @Green-Software-Foundation:registry=https://npm.pkg.github.com/

env:
  secret:
    GITHUB_TOKEN: <YOUR_PERSONAL_ACCESS_TOKEN>
```

### Using Custom Container Images

For faster startup, use custom images with pre-installed plugins:

```yaml
# values-custom-image.yaml
image:
  repository: myorg/if-with-plugins
  tag: v1.0.0

# Disable plugin installation since they're pre-installed
additionalPlugins: []
```

For custom image creation, see the [How to build custom container images](./how-to-build-container-images.md).

## Security Configuration

### Enabling Disabled Plugins

By default, certain plugins are disabled for security. Enable them if needed:

```yaml
# values-all-plugins.yaml
disabledPlugins: []  # Enable all builtin plugins
```

> **Security Warning**: The Shell, CSVImport, and CSVLookup plugins can access the filesystem and execute commands. Only enable in trusted environments.

## Other Configurations

### Resource Limits

Configure CPU and memory limits for production:

```yaml
# values-production.yaml
resources:
  limits:
    cpu: 1000m
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 128Mi
```

### Replica Count

Scale the deployment for high availability:

```yaml
# values-ha.yaml
replicaCount: 3

# Optional: Pod disruption budget
podDisruptionBudget:
  enabled: true
  minAvailable: 2
```

## Troubleshooting

### Pod Startup Issues

If pods fail to start:

1. If using a custom image, verify the image can be pulled correctly.
2. Check pod logs for any error messages.

### Plugin Installation Failures

If plugin installation fails:

1. Verify the plugin name is correct.
2. If installing plugins from Git repositories, ensure you're using a container image with git installed.
3. If installing private plugins or plugins published to GitHub Packages, verify the npmrc configuration is correct.

### API Server Access Issues

If you cannot access the API server:

1. Verify the service is properly exposed.
2. Verify the access URL is correct.
3. Verify the Content-Type is correct.
