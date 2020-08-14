# Dungeon ADDventure
Created by Josh Brown (@jgbrown-ut), Kelly Shen (@shenkel7), Esther Yoon (@estherlyoon), Reed Zimmermann (@MrZmann)

## Inspiration:
Kids often feel overwhelmed or unmotivated when learning math, partly due to dull, dry pedagogies. Additionally, video game and social media addiction pervades our society, with the pandemic intensifying the problem as people are stuck at home with nothing to do. With these issues in mind, we built a mobile app game that seeks to use one problem to solve the other: make math education fun, while also satisfying kids’ need for entertainment in a productive way.

![Hero](/app/assets/images/character/idle/tile000.png)
![Boss](/app/assets/images/boss/bossicon.png)


## Built With:
Expo, React Native, Javascript, Firebase
 
## What It Does:
Our app can be described as a mix of a dungeon-crawling and flashcard-style game. The goal of the game is to navigate to the bottom of a dungeon-like tunnel blocked at intervals by locked doors.
 
### Secret Tunnel, Secret Tunnel, Through the Mountain
The user starts his or her journey by going through the first door (level), which is addition-based. Within the level, the user’s sprite must decide which doors to enter based on the answer to a randomized addition problem. If the wrong door is entered, look out! A monster appears, shooting fireballs with math problems that the user must solve to defeat it. To beat the level, the user must win a final boss battle.
 
### You beat the boss!
Balance has been partially restored to the world! Now the next door gets unlocked and you can proceed on to harder math problems- namely, multiplication and division. At the end, a mega boss waits, armed with fireballs containing a mix of all the math problems as the ultimate test of kNoWlEdGe.
 
### About the Art
All credit for the backgrounds, boss character animations, doors, and button art go to our uber-talented team member Kelly! We found open source images for the following pieces: the flying enemy, the fireball, and the character.
 
## What We Learned:
None of us were familiar with Javascript or React at the start of the summer. We learned about navigating between stack frames, using hooks to implement state changes, designing a game loop, and more. It was awesome to go through the learning process together! We also learned how to integrate a Firebase authentication and database system into our project. Finally, we leveled up on our Git skills, learning how to properly branch, submit pull request, and resolve merge conflicts.
 
## Challenges:
The main challenge we faced was implementing gameplay functionality with React Native. We found a great package called react-native-game-engine that helped us with the dynamic parts of the game, but we realized as we were building it that React is not the best framework to use for game design.
 
Additionally, it was difficult at times to build an app for ios and Android simultaneously; sometimes, style choices looked strange, components didn’t work correctly, or the code would straight up not compile for one of the operating systems.
 
## What’s Next:
- We’d like to expand our game to include more levels and higher-level math concepts, like algebra or geometry. The levels might have to be restructured for this to be done to account for the increased complexity of these subjects. 
- A feature we really wanted to include but ran out of time for is multiplayer gameplay, where opponents can compete against each other in speed runs or fireball battles. 
- Ability of each user to customize his or her character.

