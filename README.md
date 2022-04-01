# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Marco Korcak

Time spent: **9** hours spent in total

Link to project: (https://lizard-groovy-castanet.glitch.me/)

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
- [X] Custom background image



## Video Walkthrough!


Here is a gif of a user getting the correct guesses each time and completing the game

![](https://user-images.githubusercontent.com/77298953/160968906-f277de8b-2179-4614-a496-73f4ee0f8acd.gif)

Here is a gif of a user making mistakes, getting warnings and the game ending since they used all or their attempts

![](https://user-images.githubusercontent.com/77298953/160968471-799fd394-c29e-46c8-a859-b628cd752b7f.gif)

Here is a gif of the buttons and the pictures in each button

![](https://user-images.githubusercontent.com/77298953/160969170-4d6b9e85-177f-4672-8bfa-7fd2b1597b2c.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

For sizing of images in button: https://www.w3schools.com/cssref/css3_pr_background-size.asp 

For audio sounds: https://www.w3schools.com/html/html5_audio.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

After completing the pre-work I can say that there were numerous challenges I faced. One challenged I encountered was making sure that the program was user friendly and served its purpose properly. In order to overcome this problem I made sure that the instructions were clear, the color scheme of the website was not overwhelming and that the user was in control of certain aspects. My goal was to make a program that is enjoyable and simple yet complex. I aimed at making the website have a theme which is code based since the images all related to coding. I decided to do this to make the program more uniform and visually pleasing but not overwhelming. Apart from the issue of making the program user friendly, technical issues that I encountered was implementing other optional features such as adding images to the buttons, adding a background image, adding audio files and changing the pattern of the sequence. Adding images and audio files technically was not difficult but it did require me to leave my comfort zone and learn how to achieve these tasks. I had to look at various resources in order to not only make these aspects work but also understand how they work. One issue arose with the sizing of the images because they would not be centered or they would repeat to fill the size of the screen. I needed to use specific image properties such as width and length in order to make the images fill in the required space as well as center them in orientation. Moreover, creating the random sequence generator took a lot of trial and error to fully implement and achieve. To achieve this I needed to use the Math.Random() method to make sure it randomly generated a number within the given parameters and then I needed to call it from different functions. Overall, there were numerous issues that I faced when coding this project but with the help of online resources and trial and error, I was able to achieve the desired goal.     

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing this assignment, I have numerous questions about web development and creating a website for users. When making this website I wondered what steps professional web developers take in order to ensure that the website does not crash and can handle what the user wants. When coding it must be assumed that the user can do something the developer did not account for so measures must be taken to prevent these incidents from happening, but I was curious as to what specific strategies or methods are done to combat this issue. Additionally, I was also curious as to how many iterations a website goes through until it reaches its final form. There are numerous ways that I could improve this website if more time was spent on it and was curious how developers know what to improve and how to improve the website. Moreover, I also wondered how other aspects of web development such as back-end and databases could be implemented into a website like this. I would like to understand how back-end works with front-end to create a functioning website that serves a purpose yet is entertaining. Lastly, I wonder how web developers know when to implement a certain aspect or not or chose a certain aspect over another. There are various ways that a website could be built but I wonder how developers know when to sacrifice performance for visuals or the opposite. What kind of criteria must be met of process must be examined before these decisions are made.   

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to spend working on this project I would improve it in numerous ways. To start off, I would create a leaderboard that kept track of how fast users completed the game and what their score was. I would implement this feature to give the game a sense of competition as well as attract other users to see if they could beat their friends score or their own previous score. Additionally, I would also implement a button that would change the theme of the website. There would be a button that when it is pressed it could change the background image as well as the button images so that there could be variety in the user experience. I think this would be unique and also serve the purpose of giving the user some control over the visuals of the website. Moreover, l think that implementing levels to this would be useful. This would allow the user to experience the variety of difficulty that the game would provide and see how many levels they can complete. The levels would increase in difficulty with a fast sequence playback as well as more buttons to choose from in each progressive round. Lastly, I think a feature where the user can change the buttons and use the program as a study resource would be useful. This would be accomplished by allowing the user being able to change the pictures to text and giving themselves numerous options to chose from. The user would then have the options randomly sorted and need to remember what the correct answer is out of the possible options. Overall, the website that was created could be modified to serve a variety of purposes.   



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/PEBFvb8k0vw)


## License

    Copyright [Marco Korcak]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
