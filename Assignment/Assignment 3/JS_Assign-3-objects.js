// Assignment 3

// Created an object game
var game = {
    name: "Elden Ring",
    developer: "FromSoftware, Inc.",
    hoursPlayed: 62,
    currentLevel: 138,

    addHours: function (hours) {
        this.hoursPlayed += hours;
        alert("You have now played " + this.name + " for " + this.hoursPlayed + " hours.")
    }
};

console.log("Game details: ", game);    // Output the object to the console


// Send a popup to the user asking for input, then update one of the object properties with the new value from the user
var newName = prompt("Enter the name of a new game:", game.name);
if(newName)
{
    game.name = newName;
}

// Send a second popup to the user, which updates a second (different) object property with the new value from the user
var newLevel = prompt("Enter the progression level of the new game:", game.currentLevel);
if(newName)
{
    game.currentLevel = newLevel;
}

// Call the method of your custom object to update a 3rd object property
game.addHours(10);

// Finally, output your object to the console. We should see the object with updated values
console.log("Updated game details: ", game);