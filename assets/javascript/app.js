// Create function to display each question

// If question is answered correctly, display a congrats screen. After a few seconds, display next question.
//              - create function for congrats screen with timer to display next question
//              - clear timer on button click

// If question is answered wrong, display a wrong answer screen with correct answer. After a few seconds, display next question.
//              - create function for wrong answer screen with timer to display next question
//              - clear timer on button click

// If timer runs out before question is answered, display a time's up screen with correct answer. After a few seconds, display next question.
//              - create function for times up screen with time to display next question
//              - clear timer when time runs out

// Final screen shows # of correct answers, # of incorrect answers, and an option to restart (without relaoding page)... also remove time remaining so it doesn't show
$(document).ready(function() {
  // variables
  var q1 = {
    question: "What did the license plate say on the Ghostbusters' car?",
    options: ["ECTO-1", "GHOST-1", "SLIME-1", "GBUST-1"],
    flag: [true, false, false, false],
    answer: "ECTO-1"
  };

  var q2 = {
    question: "Who was the host of Double Dare?",
    options: ["Alex Trebek", "Chuck Woolery", "Marc Summers", "Pat Sajak"],
    flag: [false, false, true, false],
    answer: "Marc Summers"
  };

  var q3 = {
    question: "What was the name of the talking car in Knight Rider?",
    options: ["CHAT", "KITT", "KATT", "KIFT"],
    flag: [false, true, false, false],
    answer: "KITT"
  };

  var q4 = {
    question: "Which of these video games was not introduced in the 1980s?",
    options: ["Frogger", "Digger", "Pac-Man", "Snake"],
    flag: [false, false, false, true],
    answer: "Snake"
  };

  var q5 = {
    question: "In which video did Michael Jackson ask Prince to appear?",
    options: ["Bad", "Billie Jean", "Beat It", "Smooth Criminal"],
    flag: [true, false, false, false],
    answer: "Bad"
  };

  var q6 = {
    question: "Who had a #1 hit with West End Girls?",
    options: ["Depeche Mode", "Erasure", "The Pet Shop Boys", "New Order"],
    flag: [false, false, true, false],
    answer: "The Pet Shop Boys"
  };

  var q7 = {
    question: "Which 80s cartoon bears bounced here and there and everywhere?",
    options: ["Care Bears", "Gummi Bears", "Berenstain Bears", "Chicago Bears"],
    flag: [false, true, false, false],
    answer: "Gummi Bears"
  };

  var rightAnswer = 0;
  var wrongAnswer = 0;
  var count = 0;
  var intervalId;

  // Timer object
  var myTimer = {
    time: 20,
    reset: function() {
      myTimer.time = 20;
      $("#time-remain").text("00:20");
    },

    start: function() {
      intervalId = setInterval(myTimer.count, 1000);
    },

    stop: function() {
      clearInterval(intervalId);
    },

    count: function() {
      myTimer.time--;
      //console.log(myTimer.time);
      var converted = myTimer.timeConverter(myTimer.time);
      $("#time-remain").text(converted);
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

  // Functions
  function reset() {
    $("#start-btn").click(startQuiz);
    $(".question-panel").hide();
    $(".results-panel").hide();
  }

  function startQuiz() {
    myTimer.start();
    $("#ask-question").html(q1.question);
    $("#button-01").text(q1.options[0]);
    $("#button-02").text(q1.options[1]);
    $("#button-03").text(q1.options[2]);
    $("#button-04").text(q1.options[3]);

    $("#start-btn").hide();
    $(".question-panel").show();
  }

  function nextQuestion() {}


  // Score keepers
  function goodAnswer() {
    rightAnswer++;
  }

  function badAnswer() {
    wrongAnswer++;
  }

  // calling functions to start game
  reset();
});
