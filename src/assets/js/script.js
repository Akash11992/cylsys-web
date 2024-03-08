$(document).ready(function () {
  $("#fullpage").fullpage({
    scrollBar: true,
    navigation: true,
    navigationTooltips: [
      "Home",
      "Welcome To the Resolution",
      "Our Client",
      "Our Work",
      "Our Product",
      "Technology Stack",
      "Testimonial",
      "Job Recommendations",
      "Contact Us",
    ],
    sectionSelector: "section",
    responsiveWidth: 770,
    //      responsiveWidth:770px
  });
  //
  //    if ($(window).width() <= 768) {
  //        console.log("Hello");
  ////        $(container).removeAttr("id");
  //    }
});
//$(document).ready(function () {
//            if ($(window).width < 700) {
//                $('#fullpage').fullpage({
//                    scrollBar: true,
//                    navigation: true,
//                    navigationTooltips: ['Home', 'Welcome To the Resolution', 'Our Client', 'Our Work', 'Our Product', 'Testimonial', 'News Letter', 'Contact Us'],
//                    loopBottom: true,
//                    sectionSelector: 'section'
//                });
//            };

// Get the current year
var d = new Date();
var yr = d.getFullYear();

// Find the HTML element where you want to display the year
var yearElement = document.getElementById("year");

// Update the content of the element with the current year
yearElement.textContent = yr;