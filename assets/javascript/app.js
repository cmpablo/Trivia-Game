// Create onClick function to start game (need start screen)

// Create timer to display each question

// If question is answered correctly, display a congrats screen. After a few seconds, display next question.
//              - create function for congrats screen with timer to display next question

// If question is answered wrong, display a wrong answer screen with correct answer. After a few seconds, display next question.
//              - create function for wrong answer screen with timer to display next question

// If timer runs out before question is answered, display a time's up screen with correct answer. After a few seconds, display next question.
//              - create function for times up screen with time to display next question

// Final screen shows # of correct answers, # of incorrect answers, and an option to restart (without relaoding page)... also remove time remaining so it doesn't show
$(document).ready(function() {
  var questions = [
    {
      q: "What did the license plate say on the Ghostbusters' car?",
      a: "ECTO-1",
      wrong: ["GHOST-1", "SLIME-1", "GBUST-1"]
    },
    {
      q: "Which sci-fi sitcom star liked to eat cats?",
      a: "Alf",
      wrong: ["Mork", "Vicki", "Evie"]
    },
    {
      q: "What 80s game show featured the Whammy?",
      a: "Press Your Luck",
      wrong: ["Family Feud", "Pyramid", "Sale of the Century"]
    },
    {
      q: "Who was the host of Double Dare?",
      a: "Marc Summers",
      wrong: ["Alex Trebek", "Chuck Woolery", "Pat Sajak"]
    },
    {
      q: "What was the name of the talking car in Knight Rider?",
      a: "KITT",
      wrong: ["KATT", "CHAT", "KIFT"]
    },
    {
      q: "Which all-girl group walked like an Egyptian over an eternal flame?",
      a: "The Bangles",
      wrong: ["The Go-Gos", "Bananarama", "En Vogue"]
    },
    {
      q: "Which of these video games was not introduced in the 1980s?",
      a: "Snake",
      wrong: ["Frogger", "Digger", "Pac-Man"]
    },
    {
      q: "In which video did Michael Jackson ask Prince to appear?",
      a: "Bad",
      wrong: ["Billie Jean", "Beat It", "Smooth Criminal"]
    },
    {
      q: "Which of these toys made its debut in the 80s?",
      a: "Strawberry Shortcake",
      wrong: ["G.I. Joe", "Troll Doll", "Suzy Homemaker"]
    },
    {
      q: "Who had a #1 hit with West End Girls?",
      a: "The Pet Shop Boys",
      wrong: ["Depeche Mode", "Erasure", "New Order"]
    },
    {
      q: "Which 80s cartoon bears bounced here and there and everywhere?",
      a: "Gummi Bears",
      wrong: ["Care Bears", "Berenstain Bears", "Chicago Bears"]
    }
  ];

  // Variables
  var startScreen;
  var rightAnswer = 0;
  var wrongAnswer = 0;
  var notAnswered = 0;
  var questionIndex = 0;
  var questionArea = $("#question-area");

  // Functions

function initScreen() {
    $("#start-btn").on("click", function(){
        askQuestion();
    });
    $(".question-panel").hide();
    $(".results-panel").hide();
}

  function askQuestion() {
    if (questionIndex <= questions.length - 1) {
      question.textContent = questions[questionIndex].q;
    } else {
      // go to game over screen
      $("#ans-correct").textContent = rightAnswer;
    }
    $("#startbtn").hide();
    $(".question-panel").show();
    $(".results-panel").show();
  }


  initScreen();
});
