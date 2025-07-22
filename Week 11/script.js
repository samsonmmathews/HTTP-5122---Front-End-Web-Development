window.onload = function () {
    var xhr = new XMLHttpRequest();

    // event handler
    xhr.onreadystatechange = function () {
        // console.log(xhr.readyState);
        if(xhr.readyState === 4)
        {
            if(xhr.status === 200)
            {
                var data = xhr.response;
                console.log(data);
                console.log("The title for the API is " + data.title);
            }
            else
            {
                // console.log("Response error");
                console.log(xhr.status);
            }
        }
    }

    console.log('sending request...');
    // https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
    // https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
    var city = "Toronto";
    var key = "8f055d8b8e106ddf1d614f55a47488c7"
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send(null);

}