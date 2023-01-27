let $popUp = $(".contact-btn");
let $popClose = $("#close-btn");
let $popWindow = $(".contact-us");
let $submit = $("#submit")

let $submitWindow = $(".subscribe_window");
let $popThankYouWindow = $(".thank_you_window");


//Open on click
$popUp.on("click", function(){
    $popWindow.fadeIn();
  });

//Close on click
$(function() {
  $popClose.on("click", function() {
    $popWindow.fadeOut();
  });
 

 
  // Form submit
  $submit.on("click", function(){
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      //hide the submit form and put the thank you form
      $popWindow.fadeOut();
      
      //$popThankYouWindow.fadeIn();

     // $.cookie('hideTheModal', 'true', { expires: 30 });
      // clean the form
    //  setTimeout(function() {
     //  th.trigger("reset");
      //}, 1000);
    });
    return false;
  });
});