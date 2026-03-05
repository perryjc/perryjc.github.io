# Chris Needs Coffee

## Setting

This game takes place at the Arlington Career Center. I tried to f
faithfully recreate it, with the exception of moving the 
library to the first floor.

## Map

```mermaid
flowchart TD
    A{Bike trail} -->|Pull over| B(Side of the trail)
    A --> 1([bike_home])
    B --> 1
    B -->|Walk down to river| C(Creek bed)
    C --> D1(Left tunnel)
    C --> D2(Middle tunnel)
    C --> D3(Right tunnel)
    D3 --> E3(Snake)
    E3 --> F1([Move It out the way])
    E3 --> F2(Walk Around it)
    F2 --> E4([Dead end])
    D2 --> T1(long tunnel)
    T1 --> E2([spraypaint])
    T1 --> J1(Junction)
    J1 --> O1(Outside)
    O1 --> E1([Get icecream])
    O1 --> G1(Back inside)
    J1 --> T2(Long tunnel)
    T2 --> E5([Sudden flood])
    D1 --> J2(Fork)
    J2 --> C1(Left)
    J2 --> C2(Right)
    J2 --> S1(SprayPaint)
    C1 -->|Wet Feet| T3(Long Tunnel)
    C2 -->|Happy| T3
    S1 -->|Cool| T3
    T3 --> J3(Offshoot)
    J3 -->|Enter Offshoot| U1(Vertical shaft)
    J3 -->|Contiue walkin| T4(tunnel)
    U1 --> E6([Climb and fall])
    U1 --> M1(Dance)
    T4 --> W1(End of box)
    W1 -->|Contiue into round tunnel| T5(Round tunnel)
    T5 --> A1(Snapping turtle)
    A1 -->|Grab its shell| A2([Bitten])
    A1 -->|Grab legs| B1(Box)
    A1 -->|Jump over| B1
    B1 -->|Ladder,Random fall chance| O2{{You Win!}}
```

The player starts on the bus, and then is directed into the Commons. T
They can explore, but must eventually make their way to rm511.

## Story

When the user gets to rm511, they learn that the teacher is asleep.
They must take the teacher's coffee mug to the library, get it 
filled, and then bring it back to the teacher.

The game starts 15 minutes before the morning class bell, and each
move costs 1 minute. So this journey must be completed in 15 moves.
Some moves (like reading a book in the library) cost extra time.

## Global Variables

The most important variables are
`haveCup` and `cupIsFull`, both
booleans that track progress in the
story. Depending on these two variables,
some rooms will display different things. For example, if you walk into the
library without the cup, it will prompt you to
read. If you walk in with the cup, it will show
the librarian filling the cup with coffee.

I also have numeric variables called `day` and `minute` which keep track of 
time. `minute` starts at 0 and counts up
with each move.

I have a little HUD map, and use a bunch of 
boolean variables to control which
rooms the player has discovered. A map is only displayed after the user
visits it.
