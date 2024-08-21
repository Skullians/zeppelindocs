# Get Started
Here is a short guide on how to setup and use Zeppelin.

> [!CAUTION]
> Zeppelin is in heavy development!\
> Things are subject to change, thus this documentation may change!


## Install Dependencies

To run Zeppelin, you need to install [Go 1.22 or newer](https://go.dev/dl/), a C compiler, and libdeflate.

You can install libdeflate using
Linux (debian): `sudo apt install libdeflate-dev -y`
macOS (Homebrew): `brew install libdeflate`
Windows (MinGW-64 / Msys2): `pacman -S mingw-w64-x86_64-libdeflate`

::: warning
Zeppelin only natively supports [Unix](https://en.wikipedia.org/wiki/List_of_Unix_systems) systems (Linux, etc).\
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

## Boot Arguments
There are a few select arguments that can be ran to enable certain functionalities.

`--no-raw-terminal` - Disables the raw terminal option, which may be useful for systems that don't work well with it.\
`--no-plugins` - Disables plugin loading, which may be useful if your system does not support plugins (and want to disable the warning message).\
`--cpuprof` - Run Zeppelin with the CPU Profiler.\
`--memprof` - Run Zeppelin with the Memory Profiler.\
