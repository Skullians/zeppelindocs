# Configuration

Similarly to Vanilla servers (and forks), Zeppelin uses a modified version of the `server.properties` file for configuration.

## Default Configuration File
```properties
accept-transfers=false # Accept transfers from other servers.
allow-flight=false
allow-nether=true
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
difficulty=easy
enable-command-block=false
enable-rcon=false
enable-status=true
enable-query=false
enable-chat=true # Whether to allow chat outright.
enable-encryption=false # Whether to enable server encryption.
chat-formatter=§ # What symbol to use for color formatting
system-chat-format= # Format of the server system chat.
enforce-secure-profile=false
enforce-whitelist=false
entity-broadcast-range-precentage=100
force-gamemode=false
function-permission-level=2
gamemode=survival
generate-structures=true
generator-settings=
hardcore=false
hide-online-players=false
initial-disabled-packs=
initial-enabled-packs=vanilla
level-name=world
level-seed=
level-type=minecraft:normal
log-ips=true
max-players=20
motd=A Minecraft Server
network-compression-threshold=256
online-mode=true
op-permission-level=4
player-idle-timeout=0
prevent-proxy-connections=false
pvp=true
query.port=25565
rcon.password=
rcon.port=25575
region-file-compression=deflate # Compression for world (gzip, deflate, none, lz4)
resource-pack=
resource-pack-id=
resource-pack-sha1=
require-resource-pack=
server-ip=
server-port=25565
simulation-distance=10
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=16
view-distance=10
white-list=false
```

::: warning
Several aspects of this properties file are currently not implemented!
:::

The majority of this file is the same as vanilla, and you can view their functionality [here](https://minecraft.fandom.com/wiki/Server.properties](https://minecraft.wiki/w/Server.properties).
