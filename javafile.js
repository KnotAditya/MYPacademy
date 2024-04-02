document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll("*"); // Select all elements

  // Set initial opacity to 0
  elements.forEach(function(element) {
      element.style.opacity = 0;
  });

  var index = 0;
  var interval = setInterval(function() {
      // Fade in each element gradually
      if (index < elements.length) {
          fadeIn(elements[index]);
          index++;
      } else {
          clearInterval(interval);
      }
  }, 100); // Adjust the interval duration for smoother or faster fade-in

  // Function to apply fade-in effect
  function fadeIn(element) {
      var opacity = 0;
      var interval = setInterval(function() {
          if (opacity < 1) {
              opacity += 0.1; // Adjust the increment value for smoother or faster fade-in
              element.style.opacity = opacity;
          } else {
              clearInterval(interval);
          }
      }, 100); // Adjust the interval duration for smoother or faster fade-in
  }
});
