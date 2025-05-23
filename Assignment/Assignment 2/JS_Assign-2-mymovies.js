// Creating seven variables for seven movies
var movie1 = "The Dark Knight";
var movie2 = "Raiders of the Lost Ark";
var movie3 = "Inception";
var movie4 = "Whiplash";
var movie5 = "Saving Private Ryan";
var movie6 = "Dead Poets Society";
var movie7 = "Bullet Train";

// Declaring and initializing variables
var option, isValid = false;

// Making the seven movie variables into an array
var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

while(isValid === false)    // Repeats the loop until the input is valid
{
    option = prompt("Which top 7 movie would you like?", "Pick a number: 1-7"); // Asking the user for a number from 1 to 7

    if(option >= 1 && option <= 7)
    {
        isValid = true; // If the input is valid, make the value of the variable true
        alert("Number " + option + " on the list is " + movies[(option-1)]);    // Displays the result
    }
    else
    {
        alert("Please enter a number between 1 and 7!");    // Displays the error message and repeats the loop until success
    }
}

for(var i = 0; i < movies.length; i++)
{
    console.log("Movie " + (i + 1) + ": " + movies[i]); // Prints the movie names to the console
}