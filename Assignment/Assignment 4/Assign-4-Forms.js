window.onload = onReady;

function onReady()
{
    var formHandle = document.forms['ixdForm'];
    formHandle.onsubmit = processForm;

    function processForm()
    {
        // Stores the input from the form into variables
        var fNameField = document.getElementById("in_fName");
        var fNameInput = fNameField.value;
        var lNameField = document.getElementById("in_lName");
        var lNameInput = lNameField.value;
        var idField = document.getElementById("in_id");
        var idInput = idField.value;
        var programField = document.getElementById("in_program");
        var programValue = programField.value;
        var programText = programField.options[programField.selectedIndex].text;
        var captionField = document.getElementById("caption_project");
        var projectField = document.querySelector("input[name='f__project']:checked");

        // If the input fields are missing, give red background
        // Also brings the input field to focus
        // First name validation
        if(fNameInput === "")
        {
            fNameField.style.background = "red";
			fNameField.focus();
			return false;
        }
        else
		{
			fNameField.style.background = "white";
		}

        // Last name validation
        if(lNameInput === "")
        {
            lNameField.style.background = "red";
			lNameField.focus();
			return false;
        }
        else
		{
			lNameField.style.background = "white";
		}

        // Humber ID validation
        // Checking the Humber ID with regex
        // First letter is 'n' or 'N', followed by 8 numbers
        var idRegex = /^[nN]\d{8}$/;
        if(!idRegex.test(idInput))
        {
            idField.style.background = "red";
			idField.focus();
			return false;
        }
        else
		{
			idField.style.background = "white";
		}

        // Humber program validation
        if (programValue === "X") {
			programField.style.background = "red";
			programField.focus();
			return false;
		}
        else
		{
			programField.style.background = "white";
		}

        // Project validation
        if(!projectField)
        {
            captionField.style.background = "red";
            return false;
        }
        else
        {
			captionField.style.background = "white";
		}

        var projectValue = projectField.value;

        // Displaying the output
        document.getElementById("form").style.display = "none";
		document.getElementById("result").style.display = "block";
        document.getElementById("result__Fname").innerText = fNameInput;
        document.getElementById("result__Lname").innerText = lNameInput;
        document.getElementById("result__id").innerText = idInput;
        document.getElementById("result__program").innerText = programText;
        document.getElementById("result__project").innerText = projectValue;

        // Prevent default submission of the form
        return false;
    }
}