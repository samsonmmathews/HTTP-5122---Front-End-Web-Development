window.onload = function() {

    var moodSelect = document.getElementById("mood-select");
    var surpriseBtn = document.getElementById("surprise-me");
    var movieDisplay = document.getElementById("movie-display");
    var anotherMovie = document.getElementById("another-movie");
    var resetBtn = document.getElementById("reset");

    const movies = {
        happy: ["Movie 1"],
        sad: ["Movie 2"],
        excited: ["Movie 3"],
        relaxed: ["Movie 4"],
        adventurous: ["Movie 5"],
        thoughtful: ["Movie 6"]
    };
    
    moodSelect.addEventListener("change", () => {
        pickMovie(moodSelect.value);
        console.log("moodSelect.value 1:" + moodSelect.value);
    });

    console.log("moodSelect.value 2:" + moodSelect.value);

    surpriseBtn.addEventListener("click", () => {
        console.log("surpriseBtn clicked");
    });

    anotherMovie.addEventListener("click", () => {
        pickMovie(moodSelect.value);
        console.log("anotherMovie clicked");
    });

    resetBtn.addEventListener("click", () => {
        console.log("resetBtn clicked");
    });

    function pickMovie(mood)
    {
        console.log("function pickMovie, mood selected: " + mood);
    }
}