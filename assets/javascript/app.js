// Create onClick function to start game (need start screen)

// Create timer to display each question

// If question is answered correctly, display a congrats screen. After a few seconds, display next question.
//              - create function for congrats screen with timer to display next question

// If question is answered wrong, display a wrong answer screen with correct answer. After a few seconds, display next question.
//              - create function for wrong answer screen with timer to display next question


// If timer runs out before question is answered, display a time's up screen with correct answer. After a few seconds, display next question.
//              - create function for times up screen with time to display next question

// Final screen shows # of correct answers, # of incorrect answers, and an option to restart (without relaoding page)... also remove time remaining so it doesn't show

var questions = [
    { q: "What did the license plate say on the Ghostbusters' car?" , a: "ECTO-1" },
    //Wrong answers: GHOST-1, SLIME-1, GBUST-1
    { q: "Which sci-fi sitcom star liked to eat cats?" , a: "Alf" },
    //Wrong answers: Mork, Vicki, Evie
    { q: "What 80s game show featured the Whammy?" , a: "Press Your Luck" },
    //Wrong answers: Family Feud, Pyramid, Sale of the Century
    { q: "Who was the host of Double Dare?" , a: "Marc Summers" },
    //Wrong answers: Alex Trebek, Chuck Woolery, Pat Sajak
    { q: "What was the name of the talking car in Knight Rider?" , a: "KITT" },
    //Wrong answers: KATT, CHAT, KIFT
    { q: "Which all-girl group walked like an Egyptian over an eternal flame?" , a: "The Bangles" },
    //Wrong answers: The Go-Gos, Bananarama, En Vogue
    { q: "Which of these video games was not introduced in the 1980s?" , a: "Snake" },
    //Wrong answers: Frogger, Digger, Pac-Man
    { q: "In which video did Michael Jackson ask Prince to appear?" , a: "Bad" },
    //Wrong answers: Billie Jean, Beat It, Smooth Criminal
    { q: "Which of these toys made its debut in the 80s?" , a: "Strawberry Shortcake" },
    //Wrong answers: G.I. Joe, Troll Doll, Suzy Homemaker
    { q: "Who had a #1 hit with West End Girls?" , a: "The Pet Shop Boys" },
    //Wrong answers: Depeche Mode, Erasure, New Order
    { q: "Which 80s cartoon bears bounced here and there and everywhere?" , a: "Gummi Bears" }
    //Wrong answers: Care Bears, Berenstain Bears, Chicago Bears
];

var rightAnswers = 0;
var wrongAnswers = 0;