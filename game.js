
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
