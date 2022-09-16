// jquery ready
$(document).ready(function () {
  // add class onscroll
  checkScroll();
  $(window).scroll(function () {
    checkScroll();
  });

  function checkScroll() {
    if ($(window).scrollTop() > 80) {
      $(".navbar").addClass("bg-white shadow-sm");
    } else {
      $(".navbar").removeClass("bg-white shadow-sm");
    }
  }
  /**ajax form sumbit */
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var object = $("#object").val();
    var message = $("#message").val();
    var dataString =
      "last_name=" +
      last_name +
      "&first_name=" +
      first_name +
      "&email=" +
      email +
      "&object=" +
      object +
      "&message=" +
      message;
    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbwEqs_xuAck_cK1wui5-H5Z0yhsLJugK_hmQCc-mZ2IGl4y7qZ_UGEBNnZ0TvAVQhiz/exec",
      data: dataString,
      success: function (resp) {
        $("#contact-form").trigger("reset");
        alert(JSON.stringify(resp.message));
        console.log(e);
      },
    });
  });
});
