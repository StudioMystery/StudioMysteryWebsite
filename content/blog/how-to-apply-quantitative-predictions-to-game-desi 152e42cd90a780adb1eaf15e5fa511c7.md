---
title: How to apply quantitative predictions to game design
date: 2024-12-05
description: Industry leader Gabe Newel espouses the virtures of quantitative predictions, but how does that work in practice?
isCompleted: true
slug: how-to-apply-quantitative-predictions-to-game-design
tags: [game dev, predictions]
---

“If you’re not making quantitative predictions, you’re probably doing it wrong.” Gabe Newel, speaking about his company’s approach to design in this video: [https://youtu.be/Td_PGkfIdIQ?t=1471](https://youtu.be/Td_PGkfIdIQ?t=1471)

This quote from the founder of Valve got me thinking: What does it that look like in practice? What even is a quantitative prediction?

As a guy who wants to produce video games, it seems like a useful practice to employ.

So I did what any self-respecting person would do. I tried to Google it. But Google’s search results are filled up with so many useless blog posts now, I gave up!

So instead of doing that, I turned to the next best search engine: Chat GPT. That at least got me to an outline of what I wanted. So I took that and refined it into a more generalized approach:

## How to make a Quantitative Prediction:

1. Write down what you want to predict.
2. Get data: Look at any available past trends.
3. List dependent variables: What affects my prediction? What limits are there?
4. Choose a Prediction Method
   1. Simple Estimation
   2. Trend Analysis: Linear Regression from Historial Data
   3. Statistical Modeling: Multi regression or time-series analysis.
   4. Simulation: Create scenarios using tools like Monte Carlo simulations.
5. List independent variables: Make some guesses (assumptions).
6. Write down the prediction’s hypothesis, and review it once it’s proved right or wrong.

## In Practice

Clear as mud right? It reminds me of a book I read a few years ago called _Superforecasting, the Art and Science of Prediction_, by Phillip Tetlock which dealt with the difference between pundit predictions and the small subset of people who can make accurate geopolitical predictions.

That said, making a video game more fun isn’t nearly as important as whether or not the war in Ukraine will last another 12 months, but that doesn't mean I can slack off and do this lazy-style. So let’s try an example:

## Example

1. I want to predict if the majority of playtesters find combat in _Esmeralda: The Black Amber Covenant_ fun or tedious.
2. Games in the past have used my style of real-time, melee combat, with enemies moving in 8 directions. LTTP sold very well with that style.
3. Reactivity in attack animations, number of bugs in the game, range of enemies, range of player, health of enemies, health of player, hitbox size of player, hitbox size of enemy pathfinding ai, playtester skill.
4. Simple Estimates based on a single session play test with 3 playtesters (so no ties)
5. Hardware functionality / control scheme layout doesn’t need to be fancy.
6. Hypothesis:
   1. If the player can hit opponents from slightly farther away than the enemy can, players will find the combat more fun.
   2. The player will enjoy combat more if they move faster than most of the enemies, or if enemies pause breifly instead of pathing like minecraft zombies that never relent.
   3. The player will enjoy combat more if they hit the enemy when they intend to, on average 60% of the time. (Is 60% too low?)

In writing this, I wonder if this is using the wrong tool for the job. Can the rigidity of the scientific method really explain something like game feel? The data I gathered seemed more vague and annecdotal.

Anyways, I plan to run this experiment with three playtesters, to see how my 3 hypothesis pan out. Then, I intend to post the results below.
