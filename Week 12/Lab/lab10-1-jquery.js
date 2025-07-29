//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(document).ready( function() {
	$('.contentBox').hide();

	//Inside of here is your jQuery/JavaScript


	//ADD CLICK EVENT TO <h2>
	
	$('.panelContainer h2').click(function () {
        console.log('panelContainer is clicked');

        // For opening the clicked article
        $(this).next().slideToggle(3000);

        // Selects all the contentBox items that are not selected to close in 3 seconds
        $('.contentBox').not($(this).next()).slideUp(3000);
    });
	
	
	
	//CHANGE <p> BACKGROUND ON HOVER
    $('.contentBox').hover( function() {
        console.log('contentBox - hover');
        $(this).addClass('textHovered');
    },
    function() {
        console.log('contentBox - hover out');
        $(this).removeClass('textHovered');
    });
});




