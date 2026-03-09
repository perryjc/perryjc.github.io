# Find the sunset!

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

The player will start on the bike trail, they must eventuly navigate the tunnels to find a great spot to watch the sun set. 

## Story

A curous player will conqure the deep dark concrete maddness under the city
They will face many threats along the way. can they make it out before the sun has gone down.

## Global Variables

To start i will have the variables, FlashlightState, Time, Emotions, and CoolFactor.
Emotions will not matter but i want to add a use for it. FlashlightState will need to be 
true so that the player can see in the dark. Time limits the player, if they reach the end
after the time is up, they wont see the sky, only the dark overcast sky. CoolFactor is by
far the most inportant variable, if you dont think so, then your a nerd.  