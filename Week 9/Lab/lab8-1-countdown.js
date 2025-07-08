/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = onReady;

//create page load function
function onReady() {

	//create variables for required HTML elements
	
	//create variables for now date and due date
	var nowDate = new Date();
	var dueDate = new Date("August 15, 2025 18:00:00");

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	document.getElementById("todayData").innerText = nowDate.toDateString();
	document.getElementById("finalData").innerText = dueDate.toDateString();

	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var nowDateMilliSec = nowDate.getTime();
	var dueDateMilliSec = dueDate.getTime();
	var timeDiff = dueDateMilliSec - nowDateMilliSec;
	
	console.log("nowDate: " + nowDate);
	console.log("dueDate: " + dueDate);
	console.log("nowDateMilliSec: " + nowDateMilliSec);
	console.log("dueDateMilliSec: " + dueDateMilliSec);
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	console.log("daysRemaining: " + daysRemaining);
		
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if(daysRemaining > 0)
	{
		document.getElementById("dueData").innerText = daysRemaining;
	}
	else
	{
		document.getElementById("countMsg").innerText = "The Deadline for the Final Assignment has passed!";
	}
}