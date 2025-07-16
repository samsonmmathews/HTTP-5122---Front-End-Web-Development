//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = onReady;

function onReady() {

    var newMsgBox = document.getElementById('newMsgBox');

    var userName = getCookie("userName");
    var userColor = getCookie("userColor");

    // If there are cookies that already exists, we will take that value and apply the stylings to the current page
    if(userName && userColor)
    {
        newMsgBox.innerHTML = "Welcome, " + userName + "!";
        document.body.style.backgroundColor = userColor;
    }
}

// Function to get the cookie - taken from w3schools
// https://www.w3schools.com/js/js_cookies.asp
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