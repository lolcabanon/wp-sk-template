# Workflows

## Bump version

### Root

Inside root : `pn version patch && pn wrap:prod`

### Client

Inside `client` : `pn version patch`

### Admin

Inside `admin` : `pn version patch`

## Launch DEV servers

From root, `pn dev` will launch both projects in parallel.
