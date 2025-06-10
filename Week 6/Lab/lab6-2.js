//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

function pageReady() {

//'WRAPPER' FUNCTION FOR DOM LOGIC

	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	mysteryBox.onmouseover = showMystery;
	var buttonBox = document.getElementById('buttonBox');


	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function showMystery() {
		var isOkay = confirm("Do you want to see something?");
		if(isOkay)
		{
			showButtonBox();
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function showButtonBox() {
		mysteryBox.style.display = "none";
		buttonBox.style.display = "block";
	}
	

	//SETUP LISTENERS

	buttonBox.onclick = function() {
		buttonBox.style.width = "600px";
		buttonBox.style.backgroundColor = "orange";
		buttonBox.innerHTML = "<h2>Surprise!!</h2>";
	}


//END onload FUNCTION
}