//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the current temperature and if it is less than 30, it will display false 
//and it will display true if it is otherwise

//It expects to receive the current temperature (currentTemp) that was entered by the user as the argument. The data type is a number

//It will return false (boolean values) if the value passed as argument is less than 30 and true if it is otherwise
function checkTemp(currentTemp)
{
    if(currentTemp > 30)
    {
        return false;
    }
    else
    {
        return true;
    }
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var temp = prompt("What is the current temperature?");

var dogWalkTemp = checkTemp(temp);

if(temp < -10)  // If the temp is less than -10, it will straight up display the message and won't check for the value of the function
{
    alert("Yikes! This is no weather for dog walking!");
}
else if(dogWalkTemp == false)   // Check for the return value of the function and decides the display message
{
    alert("Yikes! Too hot for dog walking!");
}
else
{
    alert("You're good, have a nice walk!");
}