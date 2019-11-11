$(document).ready(function() {
    $(".hide-aboutus, .show-aboutus").click(function() {
      $(".show-aboutus").toggle();
      $(".hide-aboutus").toggle();
    });
    $(".hide-menu, .show-menu").click(function() {
      $(".show-menu").toggle();
      $(".hide-menu").toggle();
    });
    $(".hide-services, .show-services").click(function() {
      $(".show-services").toggle();
      $(".hide-services").toggle();
    });
    $(".hide-testimonials, .show-testimonials").click(function() {
      $(".show-testimonials").toggle();
      $(".hide-testimonials").toggle();
    });
  }); 
  $(document).ready(function() {
    document.getElementById("form").addEventListener("submit", message);
    function message() {
      alert("Thank you for choosing Abnar, your mesage has been received and we shall get back tto as soon as possible");
    }
  });