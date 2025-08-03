    window.onload = function() {
        
        console.log("Sending request...");
        var key = "8f055d8b8e106ddf1d614f55a47488c7"
        var url;
        
        var location, iconCode, iconURL, icon, temperature, conditions, humidity;

        var buttons = document.querySelectorAll("#buttons button");

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                var city = this.id; // The button id is the city name
                console.log("City clicked: " + city);
                displayWeather(city);
            });
        }

        function displayWeather(city)
        {
            url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.onreadystatechange = function() {
            if(xhr.readyState === 4)
            {
                if(xhr.status === 200)
                {
                    var data = xhr.response;
                    console.log(data);

                    document.getElementById("output").style.display = "block";
                    document.getElementById("error").innerText = "";

                    // Gets the location
                    location = data.name;

                    // Gets the icon code
                    iconCode = data.weather[0].icon;
                    // Adds the icon code to the icon url
                    iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
                    
                    // Add °C to the end of temperature
                    temperature = Math.round(data.main.temp) + "°C";

                    // Add a period to the end of weather description and makes the first letter in capital letter
                    conditions = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1) + ".";

                    // Add % to the end of humidity
                    humidity = data.main.humidity + "%";

                    // Add the icon css code and API data for the icon image alt attribute
                    icon = "<img src='" + iconURL + "' alt='Icon for " + conditions + "'/>";

                    document.getElementById("location").innerText = location;
                    document.getElementById("icon").innerHTML = icon;
                    document.getElementById("temperature").innerText = temperature;
                    document.getElementById("conditions").innerText = conditions;
                    document.getElementById("humidity").innerText = humidity;
                }
                else
                {
                    document.getElementById("output").style.display = "block";
                    document.getElementById("error").innerText = "Error!";
                    console.log(xhr.status);
                }
            }
        }

        console.log("url: " + url);
        xhr.open('GET', url);
        xhr.send();

        }
    }