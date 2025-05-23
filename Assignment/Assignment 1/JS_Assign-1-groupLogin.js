
var firstName, groupNumber;
// Asking for a group number
groupNumber = prompt("Which team number you belong to?");

// Check if the user is in group 1-6
if(groupNumber > 0 && groupNumber <= 6)
{
    firstName = prompt("What is your first name? (First letter of the name should be capitalized)"); // Asks for the first name of the user to check from the name list

    // Using switch statements to check if the firstname the user entered matches the ones in my list
    switch(firstName)
    {
        case "John":
            alert("Welcome " + firstName + " Smith");
            break; // Checks each user if their first name is in our list and prints their full name if they are in the list
        case "Jane":
            alert("Welcome " + firstName + "  Doe");
            break;
        case "James":
            alert("Welcome " + firstName + " Brown");
            break;
        case "Michael":
            alert("Welcome " + firstName + " Williams");
            break;
        case "Mary":
            alert("Welcome " + firstName + " Johnson");
            break;
        default:
            alert("Access denied!");    // If the first name is not in the list, I am displaying an Access denied message
            break;
    }
}
else
{
    alert("Invalid entry. Access Denied!"); // If the user doesn't belong to groups 1-6 or have typed anything else
}