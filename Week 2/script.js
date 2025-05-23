var x = 5;

x = x +2;
x += 2;

var hello = "Hello ";
var world = "world";

hello += world;

console.log(hello);

if(x > 10)
{
    console.log(x + " is greater than 10");
} else {
    console.log(x + " is less than 10");
}

// if it is raining, then the ground is wet
var isRaining = false;

//if true, then...
if(isRaining)
{
    //do this
    // alert("The ground is wet");
    console.log("The ground is wet");
}
else
{
    // alert("The ground is not wet");
    console.log("The ground is not wet");
}

var price = 10;

if(price > 5)
{
    console.log("Your price is over 5");
}

var fruit = "apple";

// Prompts the user for an input
var userFruit = prompt('Please enter a fruit', 'Grapes')

// Check on that input
switch(userFruit)
{
    // VALIDATION
    // If it's apple, run this code
    case "apple" : 
        console.log("This is an apple");
        break;
    case "banana" :
        console.log("This is a banana");
        break;
    case 5 :
        console.log("This is the number 5");
        break;
    default:
        console.log("This is my default");
        break;
}

//Yes/N
var isConfirmed = confirm("Is this true?");
alert(isConfirmed);