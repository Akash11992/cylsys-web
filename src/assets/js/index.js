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

const words = ["WEB APPS...", "WEB DEVELOPMENT", "DIGITAL MARKETING"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 500);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
}

typingEffect();

$("#client-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});

$("#testimonial-slider").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  nav: false,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#work-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  items: 1,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
});

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
