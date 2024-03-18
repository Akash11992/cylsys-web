$(document).ready(function () {
  $("div.top").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("div.middle").offset().top,
      },
      1000
    );
  }),
    $("div.middle").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("div.bottom").offset().top,
        },
        1000
      );
    }),
    $("div.bottom").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("div.top").offset().top,
        },
        1000
      );
    });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});


// $("#client-slider").owlCarousel({
//   loop: false,
//   margin: 10,
//   nav: true,
//   navText: [
//     "<i class='fas fa-chevron-left'></i>",
//     "<i class='fas fa-chevron-right'></i>",
//   ],
//   autoplay: false,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//     1024: {
//       items: 4,
//     },
//   },
// });

// $("#testimonial-slider").owlCarousel({
//   loop: true,
//   margin: 10,
//   dots: true,
//   nav: false,
//   navText: [
//     "<i class='fas fa-chevron-left'></i>",
//     "<i class='fas fa-chevron-right'></i>",
//   ],
//   autoplay: true,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

// $("#work-carousel").owlCarousel({
//   loop: true,
//   autoplay: false,
//   items: 1,
//   nav: false,
//   dots: true,
//   autoplayHoverPause: true,
//   animateOut: "slideOutUp",
//   animateIn: "slideInUp",
// });

$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});
