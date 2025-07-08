// Math object

var object = {
    x : 1,
    y : function() {
        
    }
}

var pi = Math.PI;

var x = 2.47;

var round = Math.round(x);  // Round to the nearest integer
var roundUp = Math.ceil(x);
var roundDown = Math.floor(x);

var random = Math.random(); // Math.random = 0 to 0.9999999...
console.log("Random: " + random);

var closerRandom = Math.floor(Math.random() * 10) + 1;  // Generate a number between 1 and 10
console.log("closerRandom: " + closerRandom);

// Date object
var myDate = new Date();    // Create a new instance of the Date object
var newYear = new Date("January 1, 2026 00:00:00");
console.log("New Year date: " + newYear.toDateString());

var newYearMonth = newYear.getMonth();
var weekAfterNewYear = newYear.setDate(newYear.getDate() + 7);
console.log("New Year date after one week: " + newYear.toDateString());

// Javascript timers
var countdown = window.setTimeout(timerFunction, 3000);

function timerFunction() {
    // alert("Countdown has finished");
    console.log("Countdown has finished");
}

// Looping timer
var looper = window.setInterval(loopFunction, 3000);

var i = 0;
function loopFunction() {
    console.log("Value of i = " + i);
    i++;

    // Stop the interval timer after 3 seconds
    if(i > 3)
    {
        window.clearInterval(looper);
        console.log("Looper is cleared");
    }

    // Clear the timeout, maybe before it finishes
    window.clearTimeout(countdown);
}