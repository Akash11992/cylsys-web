// var owl = $("#work-carousel");
// owl.owlCarousel({
//   loop: true,
//   autoplay: false,
//   items: 1,
//   nav: false,
//   dots: true,
//   autoplayHoverPause: true,
//   animateOut: "slideOutUp",
//   animateIn: "slideInUp",
// });
//owl.on('mousewheel', '.owl-stage', function (e) {
//    if (e.deltaX>0) {
//        owl.trigger('prev.owl');
//    } else {
//
//        owl.trigger('next.owl');
//    }
//    e.preventDefault();
//});
$(function () {
  $("a[href*=#section06]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
