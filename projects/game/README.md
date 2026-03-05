# Chris Needs Coffee

## Setting

This game takes place at the Arlington Career Center. I tried to f
faithfully recreate it, with the exception of moving the 
library to the first floor.

## Map

[![](https://mermaid.ink/img/pako:eNptVF1v2jAU_SuenzyJVXECKeRhEgTohoqoCh3aAE0mMWDh2JFx1jLgv8-Jk7ZhzVN8zz3nftonGMmYwgBuuHyOdkRpMOsvBTBf99Rjewq0IoxfwJcvX88PGedA_qHqDHpoymIK5AboXenzuaTlrgCjxdqwf-9kQlcl0rPIu8N5TvgexPJZAC2BYoV0iEJF6R6saVwSw4LYx-iebjTQmRCU1yEXjVkcc_oh6KFHtt1dEfteAQ48NBVkT0vrwFqHJv2xKRR810BmuqjxmRxXV14uKvLvKpmJGDBdwkPXSjfRok9JDKiIK2bfQjOMuBTbekYzbGkuWhxSRY4pYUKv6uAIo1EmIs2kKIGRBSYYTTJ9MDMp7ZNSzVRyRzVgEY0UJcmqDt9h1CPRHjDxjlpKzlx0_3-SZW0ttJhmcUwFMIsj3-or03TRUKp9pWc5oZ3fldG1w6lbpxhN8xY85C2ohontxphihpTqM5h5Nr9ZbeSFwPkbSdNj7mKtU8sNpeRvxpmd4shDk83msJPyNYkCOA-EpgpU2Bk8YfSDKs0iwsFhRzZX7qEUmmX5nvA9EyZME9U691QOxEeLkLNkDYjZmQ3hfFV3GGPUJyKqhjFrFtY5RgPjb-7bWr6U0BzXAptWmTtUrKINbHJoocd3hkqyVUh2cb76acqKGSvNq5Bdq3unyNos9cEUS7kR65rF7DGtqVh94Mjp9mCeBbNPr_mV8ChL0urVqC6_Re6J2SDVeDSdkEnRC2CeIFP7GUzc0-mnzMCciU-XC2zArWIxDLTKaAMmVCUkP8JTrreE5n4mdAkD8xsTtV_Cpcg5KRG_pEwqmunNdgcDE-dgTlkaE037jGwVeXMxd5Wq0PRMw6DZ8txCBAYn-AKDtnPjOj7uuA72fQe3_AY8wsBt3mDfbXu-c9tsux18acC_RVDnpu03nU7Hb9_eOo6DsdeANGZaqrF9couX9_IPA7eYIg?type=png)](https://mermaid.live/edit#pako:eNptVF1v2jAU_SuenzyJVXECKeRhEgTohoqoCh3aAE0mMWDh2JFx1jLgv8-Jk7ZhzVN8zz3nftonGMmYwgBuuHyOdkRpMOsvBTBf99Rjewq0IoxfwJcvX88PGedA_qHqDHpoymIK5AboXenzuaTlrgCjxdqwf-9kQlcl0rPIu8N5TvgexPJZAC2BYoV0iEJF6R6saVwSw4LYx-iebjTQmRCU1yEXjVkcc_oh6KFHtt1dEfteAQ48NBVkT0vrwFqHJv2xKRR810BmuqjxmRxXV14uKvLvKpmJGDBdwkPXSjfRok9JDKiIK2bfQjOMuBTbekYzbGkuWhxSRY4pYUKv6uAIo1EmIs2kKIGRBSYYTTJ9MDMp7ZNSzVRyRzVgEY0UJcmqDt9h1CPRHjDxjlpKzlx0_3-SZW0ttJhmcUwFMIsj3-or03TRUKp9pWc5oZ3fldG1w6lbpxhN8xY85C2ohontxphihpTqM5h5Nr9ZbeSFwPkbSdNj7mKtU8sNpeRvxpmd4shDk83msJPyNYkCOA-EpgpU2Bk8YfSDKs0iwsFhRzZX7qEUmmX5nvA9EyZME9U691QOxEeLkLNkDYjZmQ3hfFV3GGPUJyKqhjFrFtY5RgPjb-7bWr6U0BzXAptWmTtUrKINbHJoocd3hkqyVUh2cb76acqKGSvNq5Bdq3unyNos9cEUS7kR65rF7DGtqVh94Mjp9mCeBbNPr_mV8ChL0urVqC6_Re6J2SDVeDSdkEnRC2CeIFP7GUzc0-mnzMCciU-XC2zArWIxDLTKaAMmVCUkP8JTrreE5n4mdAkD8xsTtV_Cpcg5KRG_pEwqmunNdgcDE-dgTlkaE037jGwVeXMxd5Wq0PRMw6DZ8txCBAYn-AKDtnPjOj7uuA72fQe3_AY8wsBt3mDfbXu-c9tsux18acC_RVDnpu03nU7Hb9_eOo6DsdeANGZaqrF9couX9_IPA7eYIg)

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
