//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var isConfirmed, email;

//==== LOGIC =============

isConfirmed = confirm("Do you like to join our mailing list?");

if(isConfirmed)
{
    email = prompt("Please enter your email", "me@example.com")
}

if(!email)
{
    alert("Thank you, we will not bother you again.");
}
else
{
    if(email == null || email == "" || email == "me@example.com")
    {
        alert("Thank you, but your email was not valid.");
    }
    else
    {
        alert("Thank you, our next newsletter will be sent to " + email);
    }
}
