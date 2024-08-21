# Roadmap
Zeppelin is in heavy development and not all features are implemented.
This is Zeppelin's roadmap (subject to change).

## World
- :white_check_mark: Level
    - Reading from level.dat file
- :ballot_box_with_check: Chunks
    - :white_check_mark: Loading from MCA
    - :white_check_mark: Encoding
    - :white_check_mark: Manipulation
        - :white_check_mark: Get / Set block
        - :white_check_mark:  Get / Set Light Level
    - :x: Lighting Calculation
    - :white_check_mark: MCA Writing
- :x: Entities
- :x: Daytime Cycle (WIP)
- :x: Ticking (Only daytime is ticked, WIP)
- :x: Custom block behavior
- :ballot_box_with_check: Terrain Generation
    - :white_check_mark: Superflat
    - :ballot_box_with_check: Normal (*Very* basic)
- :x: Particles
- :white_check_mark: Custom Dimensions
- :x: Custom Chunk Format

## Player
- :white_check_mark: Playerdata (from world level)
    - :white_check_mark: Reading
    - :white_check_mark: Writing
    - :white_check_mark: Generating playerdata
- :white_check_mark: Movement
    - :white_check_mark: Position
    - :white_check_mark: Rotation
- :white_check_mark: Metadata
    - :white_check_mark: Sneaking
    - :white_check_mark: Sprinting
    - :white_check_mark: Client Info
- :white_check_mark: Animation
    - :white_check_mark: Swing Arm
- :white_check_mark: Encryption
- :white_check_mark: Authentication
- :white_check_mark: Secure Chat
- :x: Interaction
- :x: Combat
- :ballot_box_with_check: Inventory (Creative mode only)

## Network
- :white_check_mark: Server Registries
- :white_check_mark: Shared Registries
- :white_check_mark: Slot Data (no components)
- :white_check_mark: Server List Ping
- :x: Multi Protocol

## Other
- :white_check_mark: NBT
    - :white_check_mark: Writing
    - :white_check_mark: Reading
- :white_check_mark: Text Formatting
- :white_check_mark: RCON
- :ballot_box_with_check: Command API
- :x: Language File for replacing built in messages
- :x: Placeholder API
