
// var document = {};   // Javascript creates this document in the background - it is a global variable
console.log(document);

//window.onload event - when the page is done loading, do something
window.onload = pageReady;

function pageReady() {

    var p = document.getElementById('paragraph');
    console.log(p.innerHTML);
    // InnerHTML will replace all the HTML inside the given element
    p.innerHTML = "I just changed this HTML!";

    var header = document.getElementById('header');
    header.innerHTML = "Replaced header";

    header.innerHTML = "<h2>Header 2</h2><div><strong>Strong text</strong></div>";

    var button = document.getElementById('button');

    // Starting my button on click event listener, call the showDetails() function when a click happens.
    button.onclick = showDetails;

    function showDetails() {
        // alert("These are the details of my webpage");

        var secretDiv = document.getElementById('details');
        secretDiv.style.display = "block";
    }

    var secretHeader = document.getElementById('secretHeader');
    // secretHeader.onmouseover = showSecret; // When you hover over an object event
    secretHeader.onmouseover = showSecret;  // When you hover over an object event

    function showSecret() 
    {
        // alert("This is my secret alert!");
    }

    // Shortcut way of doing a function for the onclick listener
    document.getElementById('alertButton').onclick = function() {
        alert("This is my alert");
    }

}