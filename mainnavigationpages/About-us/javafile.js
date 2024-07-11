document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("*"); // Select all elements

    // Set initial opacity to 0 for the fade-in effect
    elements.forEach(function(element) {
        element.style.opacity = 0;
    });

    var index = 0;
    var interval = setInterval(function() {
        if (index < elements.length) {
            fadeIn(elements[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 25);

    // Function to apply fade-in effect
    function fadeIn(element) {
        var opacity = 0;
        var interval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.05;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 25);
    }

    // Toggle responsive menu (for the hamburger icon)
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var navigation = document.getElementById("menu");
        if (navigation.className === "topnav") {
            navigation.className += " responsive";
        } else {
            navigation.className = "topnav";
        }
    });
});
