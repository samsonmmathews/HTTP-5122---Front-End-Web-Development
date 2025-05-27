//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageNum(num1, num2, num3, num4, num5)
{
    var average = ((num1 + num2 + num3 + num4 + num5)/5).toFixed(1);
    return average;
}

var avg = averageNum(5, 10, 15, 20, 25);
alert("Average value is " + avg);


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var http5122 = 85, http5110 = 70, http5121 = 90, http5125 = 75, http5126 = 80;

var avgMarks = averageNum(http5110, http5121, http5122, http5125, http5126);

if(avgMarks > 70)
{
    alert("Success! Your average is " + avgMarks + ", which is greater than 70");
}
else
{
    alert("Review required! Your average is " + avgMarks + ", which is less than 70");
}