# Introduction

Discord Trivia is a [Discord.JS](https://discord.js.org) based library designed to implement fully-fledged trivia/quiz games through your Discord bot. This library enables developers to fetch API questions from +20 categories with support for custom questions, configurable game settings, configurable designs, and a built-in leaderboard system. Thanks to [OpenTDB](https://opentdb.com) for the questions!

## Installation

Start by installing the package via the command line with [NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager): -->

```ssh
npm install discord-trivia
```

## Basic Setup

Begin by importing `GameManager` from the package and assigning it to a variable. Your game manager will be responsible for creating and managing trivia games. You can have multiple trivia games simultaneously, but only one trivia manager.

```javascript
import { GameManager } from 'discord-trivia';

const manager = new GameManager();
```

Define your first trivia game with `manager.createGame(channel)`, where `channel` is a [TextBasedChannel](https://discord.js.org/docs/packages/discord.js/14.14.1/TextBasedChannel:TypeAlias) from a [Message](https://discord.js.org/docs/packages/discord.js/14.14.1/Message:Class), [Command Interaction](https://discord.js.org/docs/packages/discord.js/14.14.1/CommandInteraction:Class), or fetched channel.

To start the game, call `game.startQueue()`. If your game was created via a command interaction, you can supply the interaction as a parameter to ensure it is replied to.

```javascript
// Message Command
const game = manager.createGame(message.channel);
game.startQueue();

// Slash Command
const game = manager.createGame(interaction.channel);

// Automated interaction reply
game.startQueue(interaction);

// Or use your own interaction.reply()
game.startQueue(); 

interaction.reply(...);
```

## Error Handling

Handle errors that may occur with your game using a [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block or [then()...catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) callbacks.

```javascript
// Try...Catch
try {
    await game.startQueue(interaction);
} catch (err) {
    console.error(`An error occurred: ${err}`);
}

// Then...Catch
game.startQueue(interaction)
    .catch(err => console.error(`An error occurred: ${err}`));
```

## Complete Basic Setup

Your final code will have this general structure:

```javascript
import { GameManager } from 'discord-trivia';

const manager = new GameManager();

// -- Inside your command function --
const game = manager.createGame(interaction.channel);

try {
    await game.startQueue(interaction);
} catch (err) {
    console.error(`An error occurred: ${err}`);
}
```

That's it! Your bot will serve your channel with a complete trivia game experience. For further customization, continue reading to learn how to configure and customize your trivia games to your liking.
