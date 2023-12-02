
var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = "";

var level = 0;

var started = false;


// game pattern

function nextSequence() {

    level++;
    $("#level-title").text("Level " + level);

    var randomNum = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+ randomChosenColor + ".mp3");
    audio.play();


}


// user clicked buttons


$(".btn").on("click", function(event) {
    var userChosenColor = event.currentTarget.id;
    userClickedPattern.push(userChosenColor);

    $("#"+userChosenColor).fadeOut(10).fadeIn(10);

    var audio = new Audio("sounds/"+ userChosenColor + ".mp3");
    audio.play();

    checkAnswer(userClickedPattern.length-1);

    // console.log(userChosenColor);
    // alert("Hellow");
})


// key pressed to start the game


$(document).keypress(function() {
    if (started == false) {
      nextSequence();
      started = true;
    }
});


// check the answer and run next level


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        
        if (userClickedPattern.length === gamePattern.length){
            
            setTimeout(function() {
            
                userClickedPattern = [];
                nextSequence();

            }, 1000);

        }

    // when game over

    } else {
        
        var audio = new Audio("sounds/"+ "wrong" + ".mp3");
        audio.play();
        $("body").addClass("game-over");

        setTimeout( function () {
            $("body").removeClass("game-over");
        }, 200);


        level = 0;
        started = false;
        userClickedPattern = [];
        gamePattern = [];

        $("#level-title").text("Game over, Press any key to start the game again");

    }

}