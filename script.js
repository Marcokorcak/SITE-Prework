// global constants
const cluePauseTime = 100; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
const pattern = []; //array for holding the pattern

//Global Variables
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var clueHoldTime = 500; //how long to hold each clue's light/sound
var guessCounter = 0; //how many guesses have been made that were incorrect
var lengthGame = 6; //how long the game is
var numMistakes = 0;

//code for generating a random pattern
for (let i = 0; i < lengthGame; i++) { 
  var buttonNumber = Math.floor(6 * Math.random()) + 1;
  pattern.push(buttonNumber);
}

//start game function
function startGame() {
  pauseIntro();
  numMistakes = 0; //setting number of mistakes to 0
  clueHoldTime = 300;
  console.log(pattern);
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence(); //calling function to show sequence
}
 //stop game function to change what buttons are shown as well as playing the music 
function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  playIntro();
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//function for playing the tone that is heard when a button is clicked
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//function for showing the sequencxe that was chosen 
function playClueSequence() {
  context.resume();
  clueHoldTime -= 20;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//function to show message when game is over
function loseGame() {
  stopGame();
  alert("Game Over. Try Again!.");
}

//function that shows message when user won
function winGame() {
  stopGame();
  alert("You Won! Great Job.");
}

//function for guesses that changes the number of mistakes and checks that the right buttons were pressed
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    numMistakes++;
    alert("You have made " + numMistakes + " mistake(s)");

    if (numMistakes == 3) {
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 280.2,
  6: 489.9,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//function to play intro music
function playIntro() {
  document.getElementById("IntroMusic").play();
}

//function to pause intro music
function pauseIntro() {
  document.getElementById("IntroMusic").pause();
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
