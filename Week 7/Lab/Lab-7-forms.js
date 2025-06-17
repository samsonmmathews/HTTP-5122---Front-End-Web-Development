/* LAB 7 - SHIPPING FORM */
window.onload = onReady;
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

//WAIT FOR THE PAGE TO LOAD

function onReady() 
{
	var formHandle = document.forms.form_ship;

	formHandle.onsubmit = processForm;

	function processForm()
	{
		var nameField = document.getElementById('in_Name');
		var pcField = document.getElementById('in_pc');
		var speedField = document.getElementById('in_Speed');

		var nameInput = nameField.value;
		var pcInput = pcField.value;
		var speedValue = speedField.value;
		var speedText = speedField.options[speedField.selectedIndex].text;

		if(nameInput === "")
        {
            nameField.style.background = "red";
			nameField.focus();
			return false;
        }
		else
		{
			nameField.style.background = "white";
		}

		if(pcInput === "")
        {
            pcField.style.background = "red";
			pcField.focus();
			return false;
        }
		else
		{
			pcField.style.background = "white";
			console.log("TEST");
		}

		if (speedValue === "0") {
			speedField.style.background = "red";
			speedField.focus();
			return false;
		}

		shipInfo.name = nameInput;
		shipInfo.pc = pcInput;
		shipInfo.speed = speedText;
		shipInfo.cost = parseFloat(speedValue);

		document.getElementById("shippingForm").style.display = "none";
		document.getElementById("thanks_msg").style.display = "block";
		document.getElementById("thanksCustomer").innerText = shipInfo.name;
		document.getElementById("thanksPC").innerText = shipInfo.pc;
		document.getElementById("thanksSpeed").innerText = shipInfo.speed;
		document.getElementById("thanksCost").innerText = shipInfo.cost;

		return false;
	}
}


