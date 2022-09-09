$(document).one( "keypress", function () {
  nextSequence();
});

var gamePattern = [];
var userClickedPattern = [];
var buttonColours = [ "red", "blue", "green", "yellow" ];
var level = 0

function nextSequence () {
  $( "h1" ).text( "Level " + level );
  level ++;
  var randomNumber = Math.floor ( Math.random () * 4 );
  var randomChosenColour = buttonColours [ randomNumber ];
  gamePattern.push ( randomChosenColour );
  $("#" + randomChosenColour ).fadeOut(100).fadeIn(100);
  playSound( randomChosenColour );
  animatePress( randomChosenColour );
};


$(".btn").click ( function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push( userChosenColour );
  playSound( userChosenColour );
  animatePress( userChosenColour );
  checkAnswer( level );

});


function playSound ( name ) {
  var audio = new Audio ( "sounds/" + name + ".mp3" );
  audio.play();
};

function animatePress( currentColour ) {
  $("." + currentColour ).addClass( "pressed" );
  setTimeout( function () {
    $("." + currentColour ).removeClass( "pressed" );
  }, 100 );
};

function checkAnswer ( currentLevel ) {
  if ( userClickedPattern [ userClickedPattern.length - 1 ] == gamePattern [ userClickedPattern.length - 1 ] ) {

  }
  else {
    playSound("wrong");
    $("body").addClass( "game-over" );
    setTimeout ( function () {
      $("body").removeClass( "game-over" );
    }, 200 );
    $("h1").text("Game Over, Press Any Key to Restart");
  };

  if ( userClickedPattern.length == gamePattern.length ) {
    setTimeout (function () {
      nextSequence();
      userClickedPattern = [];
    }, 1000);
  }


};
