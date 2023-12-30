// include.js
// $(document).ready(function () {
//   // Load the navbar.html content into the #navbar-container
//   $("#navbar-container").load("navbar.html");

//   // Load the footer.html content into the #footer-container
//   $("#footer-container").load("footer.html");
// });

// $(document).ready(function () {
//   // Load the navbar.html content into the #navbar-container
//   $("#navbar-container").load("navbar.html", function () {
//     // Load the footer.html content into the #footer-container
//     $("#footer-container").load("footer.html", function () {
//       // After both navbar and footer are loaded, call userScroll from script2.js
//       if (window.userScroll) {
//         window.userScroll();
//       }
//     });
//   });
// });

$(document).ready(function () {
  // Load the navbar.html content into the #navbar-container
  $("#navbar-container").load("navbar.html", function () {
    // Load the footer.html content into the #footer-container
    $("#footer-container").load("footer.html", function () {
      // After both navbar and footer are loaded, call userScroll
      if (window.userScroll) {
        window.userScroll();
      }
    });
  });
});
