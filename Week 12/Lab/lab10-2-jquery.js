//LAB 10 - 2 INVENTORY PAGE
$(document).ready( function() {
	$('.desc').hide();

	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$('#tblInventory tbody tr').hover( function() {
        console.log('tblInventory - hover');
        $(this).addClass('selected');
    },
    function() {
        console.log('contentBox - hover');
        $(this).removeClass('selected');
    });

	//ADD CLICK EVENT TO <tr>

	$('#tblInventory tbody tr').click(function () {

		$('.desc').hide();
		$(this).children('.desc').show();

    });

});