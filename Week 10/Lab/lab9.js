//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload

window.onload = onReady;

function onReady() {
    var form = document.forms['infoForm'];
    var newMsgBox = document.getElementById('newMsgBox');
    var deleteBtn = document.getElementById('btnDel');
    var inputName = document.getElementById('inName');
    var inputColor = document.getElementById('inColor');

    console.log("form: " + form);
    console.log("newMsgBox: " + newMsgBox);
    console.log("deleteBtn: " + deleteBtn);
    console.log("inputName: " + inputName);
    console.log("inputColor: " + inputColor);


    //check for stored values
        //retrieve stored values
    var userName = getCookie("userName");
    var userColor = getCookie("userColor");

    if(userName && userColor)
    {
        newMsgBox.innerHTML = "Welcome, ${username}!";
        document.body.style.backgroundColor = userColor;
    }

    form.onsubmit = processForm;

    function processForm()
	{
        var name = inputName.value;
        var color = inputColor.value;
        console.log("name: " + name);
        console.log("color: " + color);

        console.log("userName: " + userName);
        console.log("userColor: " + userColor);

        makeCookie("userName", name, 86400);
        makeCookie("userColor", color, 86400);

        console.log("Cookies: ", document.cookie);

        location.reload();
    }
        //change welcome text to stored name

        //change BG colour to stored colour

        //  document.body.style.background = 

    return false;
}
		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	
    function makeCookie(cookieName, cookieValue, lifespan)
    {
        document.cookie = cookieName + "=" + cookieValue + ";max-age=" + lifespan;
    }
	
    function getCookie(cookieName)
    {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

	//onsubmit Function
        
        //get values from form
		
		
		//console.log the form values

        
        //store values
        
        



    