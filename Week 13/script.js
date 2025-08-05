// XMLHTTPRequest()

// jQuery API method
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=8f055d8b8e106ddf1d614f55a47488c7&units=metric', function(result){
    console.log(result); // Output the whole weather data

    // Outputs the data by going through one at a time
    $.each(result, function(index, field) {
        console.log(index + ": " + field);
    })

});

// JavaScript fetch()

// async keyword added to run the function asynchronously
async function getGames() {
    // Get an api
    var response = await fetch('https://api.sampleapis.com/switch/games');
    if(response.ok)
    {
        // Convert to json
        var data = await response.json();
        console.log(data);
    }
    else
    {
        console.log("Error fetching API data");
    }
}

getGames();