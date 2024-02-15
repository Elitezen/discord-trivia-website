# Game Customization

You have near complete control over how you can make your trivia game look in terms of embeds and buttons.

## Overriding Embeds

The following embeds can be overridden entirely:

- `queue: (players:Player[]) => EmbedBuilder;`
- `gameStart: () => EmbedBuilder;`
- `playerJoin: (player: Player) => EmbedBuilder;`
- `gameQueueTimeout: () => EmbedBuilder;`
- `question: (question:GameQuestion) => EmbedBuilder;`
- `leaderboardUpdate: (leaderboard:any) => EmbedBuilder;`
- `playerNotInMatch: (user:User) => EmbedBuilder;`
- `playerAlreadyAnswered: (player:Player) => EmbedBuilder;`
- `playerAnsweredStats: (player:Player, timeElapsed:number) => EmbedBuilder;`
- `playerAlreadyQueued: (player:Player) => EmbedBuilder;`
- `filterReject: (user:User) => EmbedBuilder;`
- `gameEnd: (leaderboard:any) => EmbedBuilder;`

Here's a simple example of overwriting an embed:

```javascript
game.config.embeds.playerJoin = player => {
    return new EmbedBuilder()
        .setDescription(`Welcome, ${player.user}!`)
}
```

## Overriding Buttons

Buttons can be overwritten in a similar fashion.

- `join: ButtonBuilder;`
- `questionOptionA: ButtonBuilder;`
- `questionOptionB: ButtonBuilder;`
- `questionOptionC: ButtonBuilder;`
- `questionOptionD: ButtonBuilder;`
- `questionOptionTrue: ButtonBuilder;`
- `questionOptionFalse: ButtonBuilder;`

```javascript
import { ButtonStyle } from 'discord.js'

game.config.buttons.join = new ButtonBuilder()
    .setLabel('Join In!')
    .setStyle(ButtonStyle.Success);
```

**Keep in mind:** Button custom IDs will be overwritten by the library for internal functionality, no need to provide one.
