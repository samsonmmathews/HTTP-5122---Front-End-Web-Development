window.onload = onReady;

// Window onload function
function onReady() 
{
    GamepadButton.onclick = function() {
        const xhr = new XMLHttpRequest();
    }

    // COOKIES & LOCAL STORAGE
    var saveButton = document.getElementById('save');
    var deleteButton = document.getElementById('delete');

    console.log("Cookies at page load: ", document.cookie);
    console.log("Local storage at page load: ", localStorage);

    saveButton.onclick = function() {
        document.cookie = "country=CA;max-age=86400"; // 86400 = 24 hours in seconds [The lifespan of the cookie]
        document.cookie = "timezone=EST";
        document.cookie = "timezone=;max-age=0";
        console.log("Cookies:", document.cookie);
        alert(document.cookie);

        localStorage.setItem('language', 'enca');
        localStorage.setItem('country', 'CA');

        console.log("localStorage: ", localStorage)
    }

    deleteButton.onclick = function() {
        
    }
}