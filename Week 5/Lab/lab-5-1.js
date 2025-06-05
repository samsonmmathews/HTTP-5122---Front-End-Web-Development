//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    firstName: "Samson",
    lastName: "Mathew",
    age: 27,
    yearOfBirth: 1997,
    name : function() {
        alert("My first name is " + meObject.firstName + " and my last name is " + meObject.lastName);
    }
};

// Use the console to output one of those properties
console.log("First name: " + meObject.firstName);

// Create a popup that will output two of those properties concatenated together
// alert("My first name is " + meObject.firstName + " and my last name is " + meObject.lastName);

// Calling the method inside the object

meObject.name();