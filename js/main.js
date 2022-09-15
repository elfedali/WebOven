// jquery ready
$(document).ready(function () {
  // add class onscroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $(".navbar").addClass("bg-white shadow-sm");
    } else {
      $(".navbar").removeClass("bg-white shadow-sm");
    }
  });
});
