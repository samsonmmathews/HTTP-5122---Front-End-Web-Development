//DOM Traversal & manipulation
var myDiv = document.getElementById('secret');


window.onload = function() { //anonymous function

}

//onload event
$(document).ready( function() { //same as window.onload

    // same as document.getElementById()
    $('#secret').html('<strong>This is my updated text</strong>'); 
    var divContent = $('#secret').html();  // or .text();
    console.log(divContent);

    //$('#secret').css('color', 'red');

    $('#secret').addClass('purple'); // or .removeClass()

    $('.listItem').each( function(index) {
        console.log('Loop number '+index);
        $(this).addClass('greenBackground'); // also removeClass(), and toggleClass()
    });

    //$('#secret').text('<script>alert("hello")</script>'); // an example of when to use text over html

    //Event handling

    //button onclick listener
    $('#myButton').on('click', function() {
        console.log('My button was clicked');

        //$('#secret').show(); //opposite is hide();
        $('#secret').toggle(); // toggle between hidden and shown
    });

    $('#showListButton').click(function () {
        console.log('show list buton is clicked');
        var myList = $('#myList');
        // myList.slideDown(1000); // opposite is slideUp()
        myList.slideToggle(1000);
    });

});






//Ajax - more on this next week