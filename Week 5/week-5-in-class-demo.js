//Declaring my object
// JSON - JavaScript Object Notation
var myDog = {
    name: "Echo",
    age: 7,
    fixed: true,
    shots: [11025222, 110521],
    bark: function() {
        alert('bark!');
    },
    birthday: function() { // birthday method, adds 1 to the age
        myDog.age = myDog.age + 1;
    }
}

var dogArray = ['Echo', 7, true, [11025222, 110521]];

//Access the "name" property
var dogName = myDog.name;

//Changing (or setting) a new value for the name property
myDog.name = "Echo Again";

//Add a new property to the object
myDog.breed = "Border Collie";

//calling an object method
myDog.bark();

myDog.birthday();

console.log(myDog);



// if(true) 
// {
//     alert('hello');
//     if(true)
//     {
//         alert('false');
//     }
// }