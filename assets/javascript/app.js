$(document).ready(function () {
    alert("Press 'OK' to Start The Game!!");
})


var number = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

var intervalId;

// Start of countDown timer function
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log(number);
}

function decrement() {
    number--;
    console.log(number);


    $("#countDown").html("<p>Time Remaining: " + number + " </p>");

    if (number == 0) {
        
        stop();

    } else if (number == 0) {
            $("#questionsContainer").hide();
            $("#answers").show();
        
    }
}


function stop() {

    clearInterval(intervalId);

}

run();

$(".questionsContainer").on("click", ".check", function() {
    $(".check").on("click", function() {

    })

    console.log(this.id);
    
})


// Allows user to select only one answer or the other per question
$('input[type="checkbox"]').on('click', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);


    if( this.id == ("correctAnswer1") || this.id == ("correctAnswer2") || this.id == ("correctAnswer3")) {
        correctAnswers++;
        $("#correctAnswers").text("Correct Answers: " + correctAnswers);
        console.log(correctAnswers);
    } else {
        
    }
        
    if (this.id == ("wrongAnswer1") || this.id == ("wrongAnswer2") || this.id == ("wrongAnswer3")) {
        wrongAnswers++;
        $("#wrongAnswers").text("Wrong Answers: " + wrongAnswers);

    } 
}  
);


$(document).ready(function(){
    $("#answers").hide();
      $("button").click(function(){
          $(".questionsContainer").hide();
      $("#answers").show();

      
      })
    })

    $("#wrongAnswers").text("Correct Answers:" + correctAnswers);
    $("#unAnswered").text("UnAnswered: " + unAnswered);
    