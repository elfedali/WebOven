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

  /**ajax form sumbit */
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString =
      "last_name=" +
      last_name +
      "first_name=" +
      first_name +
      "&email=" +
      email +
      "&subject=" +
      subject +
      "&message=" +
      message;
    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbzqbVu46O351AegY8kPmu9S43v3MTvLk7Rr7zBaeLGcyfJ7pMl-OiAp4XnOMSRiW5Wy/exec",
      data: dataString,
      success: function (e) {
        $(".text-success").show();
        $("#contact-form").trigger("reset");
        alert("Message sent successfully");
      },
      error: function (e) {
        alert(e);
      },
    });
  });
});
