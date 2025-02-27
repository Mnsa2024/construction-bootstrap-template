$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autowidth: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsiveClass: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// init Isotope
var $grid = $(".filter-group").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

//   Scroll top button
const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  const togglescrollTop = function () {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  };
  window.addEventListener("load", togglescrollTop);
  document.addEventListener("scroll", togglescrollTop);
  scrollTop.addEventListener(
    "click",
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  );
}
