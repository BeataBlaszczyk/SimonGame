let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var level = 0;
let started = 0;
console.log(started);


$("body").keydown(function(event) {

  if (started === 1) {} else {
    started = 1;
    level = 0;
    nextSequence();

  }
})


$(".btn").click(function() {
  if (started===1){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSounds(userChosenColour);
  checkAnswer(level);
}})


function checkAnswer(level) {


  if (userClickedPattern[userClickedPattern.length - 1] != gamePattern[userClickedPattern.length - 1]) {

startOver()


    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
      $("h1").text("Press A Key to Start");
      playSounds('wrong');
    }, 200);




  }  else if(userClickedPattern.length === level) {

    userClickedPattern=[];
    setTimeout(function() {
      nextSequence();
    }, 1000);

  }

}

function startOver(){
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  started = 0;
}

function nextSequence() {
  level++;

  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  //  return randomNumber;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //return gamePattern;
  //return randomChosenColour;
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  //var music = new Audio ("sounds/"+ randomChosenColour + ".mp3");
  playSounds(randomChosenColour);
}

function playSounds(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}


function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
