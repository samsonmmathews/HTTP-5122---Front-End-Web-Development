/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = onReady;

//create page load function
function onReady() {
	//create variables for required HTML elements
	
	//create time variable so all functions have access to it
	var time = null;
	var start = document.getElementById("btnStart");
	var stop = document.getElementById("btnStop");
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function timeDisplay() {
		var nowDate = new Date();
	console.log("TEST - timeDisplay");
	var hours = doubleDigitChecker(nowDate.getHours());
	var minutes = doubleDigitChecker(nowDate.getMinutes());
	var seconds = doubleDigitChecker(nowDate.getSeconds());

	document.getElementById("hoursOut").innerText = hours;
	document.getElementById("minsOut").innerText = ":" + minutes;
	document.getElementById("secsOut").innerText = ":" + seconds;
	}

	// Function to check if the number is a single digit or a double digit. If it is a single digit, adds a 0 before the number.
	function doubleDigitChecker(num) {
		if(num < 10)
		{
			return "0" + num;
		}
		return num;
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock() {
		console.log("TEST - startClock");
		timeDisplay();
		time = setInterval(timeDisplay, 1000);
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
		console.log("TEST - stopClock");
		clearInterval(time);
	}
	
	// SET EVENT LISTENERS
	start.onclick = startClock;
	stop.onclick = stopClock;
}