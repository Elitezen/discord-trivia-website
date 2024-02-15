# Configuring Your Game

Discord Trivia allows for the configuration of nearly every aspect of your game. The following settings can be configured:

- [Custom Question Usage](#creating-custom-questions)
- [Configuration of fetched trivia questions](#configuring-fetched-trivia-questions)
- [Player count limits](#player-count-limits)
- [Filtering out users](#filtering-out-users)
- [Minimum and Maximum amount of points](#minimum-and-maximum-amount-of-points)
- [Bonus points for streaking players](#bonus-points-for-streaks)
- [Revealing the correct answer](#revealing-the-correct-answer)
- [Timeouts between segments](#timeouts-between-segments)
- [Automatic message deletion](#automatic-message-deletion)

## Keep in Mind

A game's configuration will be directly overwritten with assignments to `game.config`. Make sure to assign any configurations **before** starting the game:

```javascript
game.config[...] = ...

// ... rest of config

game.setupQueue();
```

## Creating Custom Questions

To create custom questions, import the `MultipleChoiceQuestion` and `BooleanQuestion` builders from the package.

```javascript
import { MultipleChoiceQuestion, BooleanQuestion } from 'discord-trivia';
```

Next, define an array named `customQuestions`. This is where you will add your custom questions. Follow the template below to build custom questions.

```javascript
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

  // Add more custom questions here...
];
```

Lastly, assign your array of custom questions to `Game.config.customQuestions`.

```javascript
game.config.customQuestions = customQuestions;
```

## Configuring Fetched Trivia Questions

You can choose the style of fetched trivia question to have in your game via `Game.config.fetchQuestionsOptions`. The only required override is `amount` (default `10`). Undefined options will default to randomized.

```javascript
game.config.fetchQuestionsOptions = {
    amount: 15,
    category: 'Animals',
    difficulty: 'easy',
    type: 'multiple'
}
```

## Player Count Limits

Set the minimum and maximum amount of players required for a game.

```javascript
game.config.minPlayerCount = 3;
game.config.maxPlayerCount = 10;
```

## Filtering Out Users

Restrict which users can join the game by applying a filter that runs each time a player tries to join the queue.

```javascript
game.config.playerFilter = async (user) => {
    // Example: Allow only users with the "trivia" role to join
    const member = await interaction.guild.members.fetch(user.id);
    const triviaRole = interaction.guild.roles.cache.find(r => r.name == 'trivia');

    return member.roles.cache.has(triviaRole.id);
}
```

## Minimum and Maximum Amount of Points

Configure the minimum and maximum points a player can earn per question.

```javascript
game.config.minPoints = 10;
game.config.maxPoints = 100;
```

## Bonus Points for Streaks

Configure bonus points for streaks.

```javascript
game.config.streakDefinitionLevel = 3;
game.config.pointsPerStreakAmount = 20;
game.config.maximumStreakBonus = 100;
```

## Revealing the Correct Answer

Set whether to reveal the correct answer at the end of each round.

```javascript
game.config.showAnswers = true;
```

## Timeouts Between Segments

Control the timeouts between rounds and during questions.

```javascript
game.config.timeBetweenRounds = 5_000; // 5 seconds
game.config.timePerQuestion = 15_000;  // 15 seconds
```

## Automatic Message Deletion

Configure automatic message deletion.

```javascript
game.config.messageDeleter.queue = 20_000;
game.config.messageDeleter.gameStart = 10_000;

game.config.messageDeleter.leaderboardUpdate = null;
game.config.messageDeleter.question = null;
```
