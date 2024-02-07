# Configuring Your Game

Discord Trivia allows for the configuration for nearly every aspect of your game. The following can be configured:

- [Custom Question Usage.](#creating-custom-questions)
- [Category, Difficulty, and Kind (True/False or Multiple Choice) of fetched trivia questions.](#configuring-fetched-trivia-questions)
- [Minimum and Maximum amount of players for a game.](#player-count-limits)
- [A player filter for rejecting certain guild members.](#filtering-out-users)
- [Minimum and Maximum amount of points a player can earn per question.](#minimum-and-maximum-amount-of-points)
- [Bonus points for streaking players.](#bonus-points-for-streaks)
- [Whether to show the correct answer at the end of rounds.](#revealing-the-correct-answer)
- [Time delay during and between queue, rounds, and leaderboard displays.](#timeouts-between-segments)
- [Which messages get deleted after they have been viewed.](#automatic-message-deletion)

### Keep in Mind

A game's config will be directly overwritten with assignments to `game.config`. Make sure to assign any configurations **before** starting the game:

```js
game.config[...] = ...

// ... rest of config

game.setupQueue();
```

## Creating Custom Questions

To create custom questions, import the `MultipleChoiceQuestion` and `BooleanQuestion` builders from the package.

```js
import { ... MultipleChoiceQuestion, BooleanQuestion } from 'discord-trivia';
```

Next, define an array named `customQuestions`. This is where we will add our custom questions to. You can follow the template below to build custom questions.

```js
const customQuestions = [
  new BooleanQuestion()
    .setValue("discord-trivia is awesome!")
    .setCategory("My epic category")
    .setDifficulty('easy') 
    .setCorrectAnswer('true'),
  new MultipleChoiceQuestion()
    .setValue("What's the best pizza topping?")
    .setCategory("food")
    .setDifficulty('medium')
    .setCorrectAnswer("Chicken feet")
    .setIncorrectAnswers(["Pepperoni", "Sausage", "Olives"])

  // Your turn ...
];
```

Lastly, assign your array of custom questions to `Game.config.customQuestions`

```js
game.config.customQuestions = customQuestions;
```

## Configuring Fetched Trivia Questions

You can choose what style of fetched trivia question to have in your game via `Game.config.fetchQuestionsOptions`. The only required override is `amount` (default `10`). Undefined options will default to randomized.

```js
game.config.fetchQuestionsOptions = {
    amount: 15,
    category: 'Animals',
    difficulty: 'easy',
    type: 'multiple'
}
```

## Player Count Limits

You can set the minimum amount of players required to queue up for a game to begin, and the maximum amount allowed for the game.

```js
game.config.minPlayerCount = 3;
game.config.maxPlayerCount = 10;
```

## Filtering Out Users

If you want to restrict what users can join the game, you can apply a filter which will run each time a player tries to join the queue. In this example, the filter will only allow players with the "trivia" role to join.

```js
game.config.playerFilter = async (user) => {
    const member = await interaction.guild.members.fetch(user.id);
    const triviaRole = interaction.guild.roles.cache.find(r => r.name == 'trivia');

    return member.roles.cache.has(triviaRole.id);
}
```

## Minimum and Maximum Amount of Points

The faster a player answers the correct answer, the more points they will earn.

```js
game.config.minPoints = 10;
game.config.maxPoints = 100;
```

## Bonus Points for Streaks

Configuring bonus points for streaks has 3 parts: The `streakDefinitionLevel`, `pointsPerStreakAmount` and `maximumStreakBonus`. 

- `streakDefinitionLevel` - The amount of correct answers in a row needed to be considered on a streak.

- `pointsPerStreakAmount` - The amount of bonus points *per* correct question *after* a streak has started.

- `maximumStreakBonus` - The maximum amount of bonus points a player can earn off a single question.

For example, the following configuration will begin to count streaks once a player has answered 3 correct answers in the row. 20 bonus points will be awarded for the third question, 40 for the 4th, 60 for the 5th, and so on until the player is earning a maximum of 100 bonus points.

```js
game.config.streakDefinitionLevel = 3;
game.config.pointsPerStreakAmount = 20;
game.config.maximumStreakBonus = 100;
```

## Revealing the Correct Answer

Set `showAnswers` to a boolean representing whether you want the correct answers to be revealed at the end of each round.

```js
game.config.showAnswers = true;
```

## Timeouts Between Segments

Control the amount of time that passes between each round and during each question in milliseconds.

```js
game.config.timeBetweenRounds = 5_000; //  5 seconds
game.config.timePerQuestion = 15_000;  // 15 seconds
```

## Automatic Message Deletion

Through `config.messageDeleter`, configure whether to delete the message (or any of it's kind) as well as how long to wait before doing so since the message's emission.

Provide a timeout for deletion in milliseconds, or `null` to never delete.

```js
game.config.messageDeleter.queue = 20_000;
game.config.messageDeleter.gameStart = 10_000;

game.config.messageDeleter.leaderboardUpdate = null;
game.config.messageDeleter.question = null;
```