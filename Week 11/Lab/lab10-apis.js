window.onload = function() {
    var xhr = new XMLHttpRequest();
    var temperature, conditions;

    //event handler
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200)
            {
                var data = xhr.response;
                console.log(data);

                // Add °C to the end of temperature
                temperature = Math.round(data.main.temp) + "°C";

                // Add a period to the end of weather description
                conditions = data.weather[0].description + ".";

                // Code to make just the first letter uppercase taken from freeCodeCamp.org - 22 July 2025
                // https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
                var firstLetter = conditions.charAt(0);
                var firstLetterCap = firstLetter.toUpperCase();
                var remainingLetters = conditions.slice(1);
                var capitalizedWord = firstLetterCap + remainingLetters;

                // Displaying the output
                document.getElementById("location").innerText = "Location: " + city;
                document.getElementById("temperature").innerText = "Temperature: " + temperature;
                document.getElementById("conditions").innerText = "Conditions: " + capitalizedWord;
            }
            else
            {
                console.log(xhr.status);
            }
        }
    }

    console.log("Sending request...");
    var city = "Toronto";
    var key = "8f055d8b8e106ddf1d614f55a47488c7"
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";
    console.log("url: " + url);
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send(null);
}