"use strict";

function initGame() {
  let guessAgeData = document.querySelectorAll(
    '[data-game-guess-age="guess-age"]'
  );
  let main = document.querySelector(".main");

  guessAgeData.forEach((el) => {
    /////////////////////select element////////////////
    let guessnumberlimit = el.dataset.guessNumberText;
    let againBtnText = el.dataset.againBtnText;
    let scoreLimitText = el.dataset.scoreLimit;
    let guesstext = el.dataset.guessText;
    let questionText = el.dataset.questionText;
    let checkbtn = el.dataset.checkBtn;
    let responseText = el.dataset.response;
    let scoretext = el.dataset.scoreText;
    let Score = el.dataset.score;
    let highScoretext = el.dataset.highscoreText;
    let HighScore = el.dataset.highscore;

    /////////////////////crate element////////////////
    let modal2 = document.querySelector(".modal");
    let guessNumberText = document.createElement("h1");
    let headerTag = document.createElement("header");
    let topContainer = document.createElement("div");
    let againButton = document.createElement("button");
    let scoreLimit = document.createElement("p");
    let guesscontainer = document.createElement("div");
    let guessText = document.createElement("h3");
    let middleContainer = document.createElement("div");
    let questionContainer = document.createElement("div");
    let questionContent = document.createElement("h1");
    let middleLine = document.createElement("div");
    let bottomContainer = document.createElement("div");
    let leftInput = document.createElement("div");
    let numberInput = document.createElement("div");
    let input = document.createElement("input");
    let checkContainer = document.createElement("div");
    let checkButton = document.createElement("button");
    let rightOutput = document.createElement("div");
    let response2 = document.createElement("p");
    let scoreText = document.createElement("p");
    let score2 = document.createElement("span");
    let highscoretext = document.createElement("p");
    let highscore2 = document.createElement("span");
    let overlay2 = document.createElement("div");

    /////////////////////add classlist////////////////
    modal2.classList.add("hidden");
    headerTag.classList.add("header");
    topContainer.classList.add("top-container");
    againButton.classList.add("again", "primary-btn");
    scoreLimit.classList.add("score-limit");
    guesscontainer.classList.add("guess-content");
    guessText.classList.add("guess-text");
    middleContainer.classList.add("middle-container");
    questionContainer.classList.add("question-container");
    questionContent.classList.add("question");
    questionContent.classList.add("question-no-active");
    middleLine.classList.add("line");
    bottomContainer.classList.add("bottom-container");
    leftInput.classList.add("left-input");
    numberInput.classList.add("number-input");
    input.classList.add("input");
    input.type = "number";
    input.min = 1;
    input.max = 20;
    checkContainer.classList.add("check-container");
    checkButton.classList.add("check", "primary-btn");
    rightOutput.classList.add("right-output");
    response2.classList.add("response");
    scoreText.classList.add("score-text");
    score2.classList.add("score");
    highscoretext.classList.add("highscore-text");
    highscore2.classList.add("highscore");
    overlay2.classList.add("overlay", "hidden");

    ///////////////////// add innerHtml////////////////

    guessNumberText.textContent = guessnumberlimit;
    againButton.textContent = againBtnText;
    scoreLimit.textContent = scoreLimitText;
    guessText.textContent = guesstext;
    questionContent.textContent = questionText;
    checkButton.textContent = checkbtn;
    response2.textContent = responseText;
    scoreText.textContent = scoretext;
    score2.textContent = Score;
    highscoretext.textContent = highScoretext;
    highscore2.textContent = HighScore;

    ///////////////////// apend child////////////////

    main.appendChild(modal2);
    modal2.appendChild(guessNumberText);
    main.appendChild(headerTag);
    headerTag.appendChild(topContainer);
    topContainer.appendChild(againButton);
    topContainer.appendChild(scoreLimit);
    headerTag.appendChild(guesscontainer);
    guesscontainer.appendChild(guessText);
    main.appendChild(middleContainer);
    middleContainer.appendChild(questionContainer);
    questionContainer.appendChild(questionContent);
    main.appendChild(middleLine);
    main.appendChild(bottomContainer);
    bottomContainer.appendChild(leftInput);
    leftInput.appendChild(numberInput);
    numberInput.appendChild(input);
    leftInput.appendChild(checkContainer);
    checkContainer.appendChild(checkButton);
    bottomContainer.appendChild(rightOutput);
    rightOutput.appendChild(response2);
    rightOutput.appendChild(scoreText);
    scoreText.append(score2);
    rightOutput.appendChild(highscoretext);
    highscoretext.append(highscore2);
    main.appendChild(overlay2);
  });
}

initGame();

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let response = (document.querySelector(".response").textContent =
  "Start guessing...");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let score = 20;
let highscore = 0;

function krishnIdea() {
  let input = Number(document.querySelector(".input").value);
  // console.log(input);
  if (input == secretNumber) {
    document.querySelector(".response").textContent = "💐Correct answer";
    document.body.style.backgroundColor = "green";
    document.querySelector(".question").textContent = secretNumber;
   
   
  } else {
    if (input > secretNumber && input <= 20) {
      document.querySelector(".response").textContent = "📈 to High";
      document.body.style.backgroundColor = "#222";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (input < secretNumber && input > 0) {
      document.querySelector(".response").textContent = "📉 to Low";
      document.body.style.backgroundColor = "#222";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (!input) {
      document.querySelector(".response").textContent =
        "⛔️ ENTER THE NUMBER FIRST";
    } else if (input > 20) {
      openModel();
    }
  }
}

function openModel() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModel() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function reset() {
  if(score>highscore){
    highscore = score;
  }
  document.querySelector(".highscore").textContent = highscore;
  score=20;
  document.body.style.background = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".response").textContent = "Start guessing...";
  document.querySelector(".input").value = "";
  secretNumber = Math.trunc((Math.random() *20)+1);
  document.querySelector(".question").textContent =  '?' ;

}


document.querySelector(".overlay").addEventListener("click", closeModel);

document.querySelector(".again").addEventListener("click", function () {
  reset();
});
document.querySelector(".check").addEventListener("click", function () {
  krishnIdea();
});
overlay.addEventListener("click", closeModel());
let input = Number(document.querySelector(".input"));
document.querySelector(".input").addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    krishnIdea();
  }
});
