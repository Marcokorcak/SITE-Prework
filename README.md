# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Marco Korcak

Time spent: **4** hours spent in total

Link to project: (https://glitch.com/edit/#!/lizard-groovy-castanet)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Audio file that plays while the user hasnt started and stops when the game is started
- [X] Mute and unmute buttons for the audio that is playing
- [X] User gets a notification saying how many mistakes they have made so far
- [X] Solid background image




## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[For sizing of images in button: https://www.w3schools.com/cssref/css3_pr_background-size.asp 
For audio sounds: https://www.w3schools.com/html/html5_audio.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[After completing the pre-work I can say that one challenged I encountered was getting the program to produce a random pattern each time it ran. This was an issue because I had difficultly altering the existing code at first. I understood that the sequence array needed to be empty because if it had set values then it would not be able to change. I had to create another variable that defined the length of the array which set bounds for the code as to how many different numbers needed to be generated in one round. Then I had to work with the Math.random function which was not that difficult since all I needed to do was define a new function and define the maximum and minimum number. I used a for-loop so there were multiple random numbers generated and set the bound as less than the pattern length instead of a definite number in case the pattern length was changed. A for loop was used to generate a different number for each “i” or each new round that the user progressed. I overcame this issue by understanding the fundamentals of the issue and realizing that a function was needed to create the new sequence and then it needed to be called in order to put it to use. Understanding the issue and logic was what allowed me to progress and overcome this issue.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
