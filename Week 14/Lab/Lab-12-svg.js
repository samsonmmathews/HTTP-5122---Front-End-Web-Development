//LAB 12 - SVG OUTDOOR SCENE

// Keyword: Bananas

window.onload = function() {
    
    var sun = document.getElementById("sun");
    var sky = document.getElementById("sky");

    // Listen for mouse hover and changing the color of svgs
    sky.onmouseover = function () {
        sky.setAttribute("fill", "orange");
        sun.setAttribute("fill", "red");
    };

    sky.onmouseout = function () {
        sky.setAttribute("fill", "skyblue");
        sun.setAttribute("fill", "yellow");
    };
}