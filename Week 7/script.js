window.onload = onReady;

// Window onload function
function onReady() 
{
    //Get the form from the DOM
    var formHandle = document.forms.myForm;

    // Add an 'on submit' event handler to the form
    formHandle.onsubmit = processForm;

    function processForm()
    {
        // Get the value of the nameInput field
        var nameInput = formHandle.nameInput.value;
        console.log(nameInput);

        // Validating the name input by checking if the field is empty
        if(nameInput === "")
        {
            var nameError = document.getElementById('name-error').innerHTML = "Please fill out the name field";
            // alert("Please fill out the name field");
        }
        else
        {
            var loginResult = document.getElementById('login-result');
            loginResult.innerHTML = "Welcome, " + nameInput;
        }

        var courseInput = formHandle.classNumberInput.value;

        // Validate form input structure with regex
        var courseCodeRegex = /^http5\d\d\d$/i;
        var isRegexMatching = courseCodeRegex.test(courseInput);
        // alert(isRegexMatching);
        if(isRegexMatching === false)
        {
            var classError = document.getElementById('class-error').innerHTML = "Please enter a valid course";
        }

        // Prevent default submission of the form
        return false;
    }
}