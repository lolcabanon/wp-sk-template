Hey, I should probably take the time to write something meaningful here. Not now tho.

## Quick overview

This is a template project to kickstart the making of simple WordPress plugins with SvelteKit. I made it mostly for myself, but sharing is caring, so here we are.

Please raise an issue or discussion is you try to use this and fail... But maybe just try a litte bit more before?

Ohh, and, I use Arch btw (Manjaro ackchyually). Reminder, I built this for me. YMMV.

## Includes

-   One WordPress shortcode (`./client`)
-   One WordPress admin panel (`./admin`)
-   SCSS
-   Some config
-   Lot of fun (not guaranteed)

## Workflows

### Get going

1. Clone the repo
1. Change every `my-plugin`, `my_plugin`, `My Plugin`, ...
1. While you're at it, have a read
1. Change prod host in `sharedConfig.js`
1. `pnpm install && cd ./client && pnpm install && cd ../admin && pnpm install`
1. `pnpm dev` (from root or client or admin)
1. Write some code

### Build and deploy

1. `pnpm wrap:prod` (will build automatically)
1. Install, activate and... hope for the best?

### Bump version

#### Root

Inside root : `pn version patch && pn wrap:prod`

#### Client

Inside `client` : `pn version patch`

#### Admin

Inside `admin` : `pn version patch`

### Launch DEV servers

From root, `pn dev` will launch both projects in parallel.
