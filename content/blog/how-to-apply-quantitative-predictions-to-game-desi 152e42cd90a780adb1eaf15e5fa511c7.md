---
title: How to Apply Quantitative Predictions to Game Design
date: 2024-12-05
description: Industry leader Gabe Newel espouses the virtures of quantitative predictions, but how does that work in practice?
isCompleted: true
slug: how-to-apply-quantitative-predictions-to-game-design
categories: [Game Dev]
tags: [Quantitative Analysis, Predictions, Valve, Gabe Newel, AB Testing]
---

## I'm Doing it Wrong

“If you’re not making quantitative predictions, you’re probably doing it wrong.” Said Gabe Newel, speaking about his company’s approach to design in [this video.](https://youtu.be/Td_PGkfIdIQ?t=1471)

Newel's words got me thinking: What is a quantitative prediction? And how can game devs apply them to their design process? As a guy who wants to produce video games, it seems like a useful practice to employ.

### Define: Quantitative Prediction

A quantitative prediction is a guess based on a mental model combined with measured, numeric variables that ultimately tries to predict an outcome.

Or in other words, a scientific hypothesis.

## How to make a Quantitative Prediction:

1. Write down the question you are trying to answer.
2. Learn about the context surrounding your question. What data, trends, annecdotes might influence the outcome? List them.
3. Based on the listed variables, create a hypothesis.
4. Pick a methodology to employ.
5. Run an experiment using the chosen method and your hypothesis.
6. Examine the results and try again, if necessary.

### Some Methodolgies to Try

1. A / B Testing
2. Segmentation
3. Correlation
4. Surveys
5. In-Game Tracking

_Psst! I stole these from [this logrocket blog post](https://blog.logrocket.com/product-management/what-is-quantitative-analysis-examples/)._

## In Practice

Clear as mud right? It reminds me of a book I read a few years ago called _Superforecasting, the Art and Science of Prediction_, by Phillip Tetlock which examined a small subset of people who can consistently make accurate geopolitical predictions.

Making a video game more fun shouldn’t be as complicated as predicting whether or not the war in Ukraine will last another 12 months, but it's no cake-walk either. Let’s try an example:

### Example

1. Question: Is combat in my indie game actually fun?

2. Context and Variables: Games in the past have used my style of real-time, melee combat, with enemies moving in 8 directions. LTTP sold very well with combat in the same style. Things that may impact player enjoyment include: Reactivity in attack animations, number of bugs in the game, range of enemies, range of player, health of enemies, health of player, hitbox size of player, hitbox size of enemy pathfinding ai, playtester skill.

3. Hypothesis:

   1. If the player can hit opponents from slightly farther away than the enemy can, players will find the combat more fun.
   2. The player will enjoy combat more if they move faster than most of the enemies, or if enemies pause breifly instead of pathing like minecraft zombies that never relent.
   3. The player will enjoy combat more if they hit the enemy when they intend to, on average 60% of the time. (Is 60% too low?)

4. Methodology: A/B Test with three playtesters and different settings applied in my game.

## Conclusion

In writing this, I wonder if this is using the wrong tool for the job. Can the rigidity of the scientific method really explain something like game feel? The data I gathered seemed too generalized and annecdotal.

Maybe I'm feeling the same pain Barry Ip and Gabriel Jacobs felt when they wrote this: ["Quantitative evaluations clearly cannot easily be applied to all game characteristics."](https://www.sciencedirect.com/science/article/abs/pii/S0142694X04000201)

Then again, it's hard to go against the big N himself. Valve seems to think quantitative prediction is the only way. They seem to treat game design like an engineering excercise.

Anyways, I plan to run this example experiment with three playtesters in my core demographic and see how my 3 hypothesis pan out. Then, I intend to post the results below.

Stay tuned!
