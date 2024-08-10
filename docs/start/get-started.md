# Get Started
Here is a short guide on how to setup and use Zeppelin.

> [!CAUTION]
> Zeppelin is in heavy development!\
> Things are subject to change, thus this documentation may change!


## Install Dependencies

To run Zeppelin, you need to install [Golang 1.22 (or over)](https://go.dev/dl/), a C compiler, and libdeflate.

You can install a C compiler & libdeflate through `sudo apt install zlib1g-dev libdeflate-dev -y`

::: warning
Zeppelin only supports [Unix](https://en.wikipedia.org/wiki/List_of_Unix_systems) systems (Linux, etc).\
Windows is not supported, however you can run it on WSL (recommended) or MYSYS2 as long as you have libdeflate installed.
:::

## Setup

1. Clone the repository through `git clone https://github.com/ZeppelinMC/Zeppelin`, or optionally [download it as a zip](https://github.com/ZeppelinMC/Zeppelin/archive/refs/heads/main.zip).

2. Open a terminal in the root directory of Zeppelin, and run `go run .`\
**If on Windows, ensure you are in a Unix environment (either through WSL or MSYS2)!**

Zeppelin will automatically download the necessary dependencies and your server will start.
It will generate a new world for you, or you can import your own by pasting the world folder in the root server directory.

::: tip
If you are having issues connecting, ensure you set the `server-ip` in `server.properties` to `0.0.0.0`, or whatever you prefer.
:::
