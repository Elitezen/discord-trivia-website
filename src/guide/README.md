# Introduction

Discord Trivia is a [Discord.JS](https://discord.js.org) based library designed to implement fully-fledged trivia/quiz games through your Discord bot. This library enables developers to fetch API questions from +20 categories with support for custom questions, configurable game settings, configurable designs, and a built in leaderboard system.

## Installation

Start by installing the package via the command line with [NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)

```ssh
npm install discord-trivia
```

## Basic Setup

Start by importing `GameManager` from the package and assigning it to a "manager" variable. Your game manager will be in charge of creating and managing your ongoing trivia games. There can be multiple trivia games going on at once, but there should only be one trivia manager.

```js
import { GameManager } from 'discord-trivia';

const manager = new GameManager();
```

Below that, define your first trivia game with `manager.createGame(channel)`, where `channel` is a [TextBasedChannel](https://discord.js.org/docs/packages/discord.js/14.14.1/TextBasedChannel:TypeAlias). The channel can either be from a [Message](https://discord.js.org/docs/packages/discord.js/14.14.1/Message:Class), [Command Interaction](https://discord.js.org/docs/packages/discord.js/14.14.1/CommandInteraction:Class), or fetched channel.

To begin your game, call `game.startQueue()`. If your game was created via a command interaction you can supply the interaction as a parameter to ensure it is replied to.

```js
// Message Command
const game = manager.createGame(message.channel);
game.startQueue();

// Slash Command
const game = manager.createGame(interaction.channel);
game.startQueue(interaction); // Or use your own interaction.reply()
```

## Error Handling

It's also a good practice to handle any possible errors that may occur with your game by using a [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block or [then()...catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) callbacks.

```js
// Try...Catch
try {
    await game.startQueue(interaction);
} catch (err) {
    console.error(`An error occured: ${err}`);
}

// Then...Catch
game.startQueue(interaction)
    .catch(err => console.error(`An error occured: ${err}`));
```

## Complete Basic Setup

Your final code will have this general structure:

```js
import { GameManager } from 'discord-trivia';

const manager = new GameManager();

// -- Inside your command function --
const game = manager.createGame(interaction.channel);

try {
    await game.startQueue(interaction);
} catch (err) {
    console.error(`An error occured: ${err}`);
}
```

And that's it! Your bot will then serve your channel with a complete trivia game experience. However, you will problably want to make the experience unique and fitting to your server members. It's now time to learn how to configure and customize your trivia games to your liking.