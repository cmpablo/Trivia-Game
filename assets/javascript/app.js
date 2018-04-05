$(document).ready(function() {
  // Variables
  var rightAnswer = 0;
  var wrongAnswer = 0;
  var unanswered = 0;
  var count = 0;
  var intervalId;
  var clockRunning = false;
  var index = 0;
  var button01 = $("#button-01");
  var button02 = $("#button-02");
  var button03 = $("#button-03");
  var button04 = $("#button-04");

  // Timer object
  index = 0;
  var myTimer = {
    time: 20,
    reset: function() {
      myTimer.time = 20;
      $("#time-remain").text("00:20");
    },

    start: function() {
      if (!clockRunning) {
        intervalId = setInterval(myTimer.count, 1000);
        clockRunning = true;
      }
    },

    stop: function() {
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
      myTimer.time--;
      var converted = myTimer.timeConverter(myTimer.time);
      $("#time-remain").text(converted);
      if (myTimer.time >= 0) {
        myTimer.time;
      } else if (myTimer.time <= 0) {
        index++;
        answerNone();
        myTimer.stop();
        if (index < questionArray.length) {
          loadQuestion(index);
          myTimer.reset();
        } else {
          $(".ans-choice").hide();
          gameOver();
        }
      }
    },

    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - minutes * 60;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (minutes === 0) {
        minutes = "00";
      }
      return minutes + ":" + seconds;
    }
  };
  // Questions
  var q1 = {
    question: "What did the license plate say on the Ghostbusters' car?",
    options: ["ECTO-1", "GHOST-1", "SLIME-1", "GBUST-1"],
    flag: [true, false, false, false]
  };

  var q2 = {
    question: "Who was the host of Double Dare?",
    options: ["Alex Trebek", "Chuck Woolery", "Marc Summers", "Pat Sajak"],
    flag: [false, false, true, false]
  };

  var q3 = {
    question: "What was the name of the talking car in Knight Rider?",
    options: ["CHAT", "KITT", "KATT", "KIFT"],
    flag: [false, true, false, false]
  };

  var q4 = {
    question: "Which of these video games was not introduced in the 1980s?",
    options: ["Frogger", "Digger", "Pac-Man", "Snake"],
    flag: [false, false, false, true]
  };

  var q5 = {
    question: "In which video did Michael Jackson ask Prince to appear?",
    options: ["Bad", "Billie Jean", "Beat It", "Smooth Criminal"],
    flag: [true, false, false, false]
  };

  var q6 = {
    question: "Who had a #1 hit with West End Girls?",
    options: ["Depeche Mode", "Erasure", "The Pet Shop Boys", "New Order"],
    flag: [false, false, true, false]
  };

  var q7 = {
    question: "Which 80s cartoon bears bounced here and there and everywhere?",
    options: ["Care Bears", "Gummi Bears", "Berenstain Bears", "Chicago Bears"],
    flag: [false, true, false, false]
  };

  var q8 = {
    question: "Which sci-fi sitcom star like to eat cats?",
    options: ["Mork", "Vicki", "Alf", "Evie"],
    flag: [false, false, true, false]
  }

  var q9 = {
    question: "Which all-girl group walked like an Egyptian over an eternal flame?",
    options: ["Bananarama", "En Vogue", "The Go-Gos", "The Bangles"],
    flag: [false, false, false, true]
  }

  var q10 = {
    question: "Which game show featured the Whammy?",
    options: ["Pyramid", "Press Your Luck", "Family Feud", "Sale of the Century"],
    flag: [false, true, false, false]
  }

  var q11 = {
    question: "Which of these toys made its debut in the 80s?",
    options: ["Strawberry Shortcake", "G.I. Joe", "Suzy Homemaker", "Troll Doll"],
    flag: [true, false, false, false]
  }

  // displays question
  var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

  function loadQuestion(questionSelect) {
    myTimer.start();
    $(".question-panel").show();
    $("#start-btn").hide();

    $("#ask-question").html(
      "<h3>" + questionArray[questionSelect].question + "</h3>"
    );
    button01.text(questionArray[questionSelect].options[0]);
    button02.text(questionArray[questionSelect].options[1]);
    button03.text(questionArray[questionSelect].options[2]);
    button04.text(questionArray[questionSelect].options[3]);
  }

  function startGame() {
    index = 0;
    $(".question-panel").hide();
    $(".results-panel").hide();
    $("#start-btn").on("click", function() {
      loadQuestion(index);
      $(".intro-text").hide();
    });
  }

  function resetGame() {
    index = 0;
    rightAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    myTimer.reset;
    loadQuestion(index);
    $("#my-timer").show();
    $(".ans-choice").show();
    $(".results-panel").hide();
    $(".intro-text").hide();
  }

  function answerRight() {
    rightAnswer++;
  }

  function answerWrong() {
    wrongAnswer++;
  }

  function answerNone() {
    unanswered++;
  }

  function gameOver() {
    $("#ask-question").empty();
    $(".results-panel").show();
    $("#ans-correct").text(rightAnswer);
    $("#ans-wrong").text(wrongAnswer);
    $("#ans-unanswer").text(unanswered);
    myTimer.stop();
    $("#my-timer").hide();
    $("#replay-btn").on("click", function() {
      resetGame();
    });
  }

  // Check answers
  $(".ans-choice").on("click", function() {
    if (this.id === "button-01") {
      var selectedAnswer = "1";
    } else if (this.id === "button-02") {
      selectedAnswer = "2";
    } else if (this.id === "button-03") {
      selectedAnswer = "3";
    } else if (this.id === "button-04") {
      selectedAnswer = "4";
    }

    if (selectedAnswer === "1" && questionArray[index].flag[0] == true) {
      answerRight();
    } else if (selectedAnswer === "1") {
      answerWrong();
    }

    if (selectedAnswer === "2" && questionArray[index].flag[1] == true) {
      answerRight();
    } else if (selectedAnswer === "2") {
      answerWrong();
    }

    if (selectedAnswer === "3" && questionArray[index].flag[2] == true) {
      answerRight();
    } else if (selectedAnswer === "3") {
      answerWrong();
    }

    if (selectedAnswer === "4" && questionArray[index].flag[3] == true) {
      answerRight();
    } else if (selectedAnswer === "4") {
      answerWrong();
    }

    index++;
    if (index < questionArray.length) {
      loadQuestion(index);
      myTimer.reset();
    } else {
      $(".ans-choice").hide();
      gameOver();
    }
  });

  startGame();
});
