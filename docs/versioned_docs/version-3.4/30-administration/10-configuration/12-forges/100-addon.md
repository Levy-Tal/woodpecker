# Custom

If the forge you are using does not meet the [Woodpecker requirements](../../../92-development/02-core-ideas.md#forges) or your setup is too specific to be included in the Woodpecker core, you can write an addon forge.

:::warning
Addon forges are still experimental. Their implementation can change and break at any time.
:::

:::danger
You must trust the author of the addon forge you are using. They may have access to authentication codes and other potentially sensitive information.
:::

## Usage

To use an addon forge, download the correct addon version. Then, you can add the following to your configuration:

```ini
WOODPECKER_ADDON_FORGE=/path/to/your/addon/forge/file
```

In case you run Woodpecker as container, you probably want to mount the addon binary to `/opt/addons/`.

### Bug reports

If you experience bugs, please check which component has the issue. If it's the addon, **do not raise an issue in the main repository**, but rather use the separate addon repositories. To check which component is responsible for the bug, look at the logs. Logs from addons are marked with a special field `addon` containing their addon file name.

## List of addon forges

- [Radicle](https://radicle.xyz/): Open source, peer-to-peer code collaboration stack built on Git. Radicle addon for Woodpecker CI can be found at [this repo](https://explorer.radicle.gr/nodes/seed.radicle.gr/rad:z39Cf1XzrvCLRZZJRUZnx9D1fj5ws).

## Creating addon forges

Addons use RPC to communicate to the server and are implemented using the [`go-plugin` library](https://github.com/hashicorp/go-plugin).

### Writing your code

This example will use the Go language.

Directly import Woodpecker's Go packages (`go.woodpecker-ci.org/woodpecker/v3`) and use the interfaces and types defined there.

In the `main` function, just call `"go.woodpecker-ci.org/woodpecker/v3/server/forge/addon".Serve` with a `"go.woodpecker-ci.org/woodpecker/v3/server/forge".Forge` as argument.
This will take care of connecting the addon forge to the server.

:::note
It is not possible to access global variables from Woodpecker, for example the server configuration. You must therefore parse the environment variables in your addon. The reason for this is that the addon runs in a completely separate process.
:::

### Example structure

```go
package main

import (
  "context"
  "net/http"

  "go.woodpecker-ci.org/woodpecker/v3/server/forge/addon"
  forgeTypes "go.woodpecker-ci.org/woodpecker/v3/server/forge/types"
  "go.woodpecker-ci.org/woodpecker/v3/server/model"
)

func main() {
  addon.Serve(config{})
}

type config struct {
}

// `config` must implement `"go.woodpecker-ci.org/woodpecker/v3/server/forge".Forge`. You must directly use Woodpecker's packages - see imports above.
```
