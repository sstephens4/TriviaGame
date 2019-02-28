$(document).ready(function () {
    alert("Press 'OK' to Start The Game!!");
})

var number = 30;

var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log(number);
}

function decrement() {
    number--;
    console.log(number);


    $("#countDown").html("<p>Time Remaining: " + number + "</p>");

    if (number == 0) {

        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}

run();





$('.check').click(function () {
    $('.check').not(this).prop('checked', false);
});


