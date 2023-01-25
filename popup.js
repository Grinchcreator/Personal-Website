let $popUp = $(".contact-btn");
let $popClose = $("#close-btn");
let $popWindow = $(".contact-us");
let $submit = $("#submit")

let $subscribeWindow = $(".subscribe_window");
let $popThankYouWindow = $(".thank_you_window");


//Open on click
$popUp.on("click", function(){
    $popWindow.fadeIn();
  });

$(function() {
  // Close Pop-Up after clicking on the button "Close"
  $popClose.on("click", function() {
    $popWindow.fadeOut();
  });
 

 
  // Form Subscribe
  $submit.on("click", function(){
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
      $popWindow.fadeOut();
      
      //$popThankYouWindow.fadeIn();
      // используем куки на 30 дней, если человек заполнил форму
      // для куки обязательно должен быть подключен jquery.cookie.min.js
     // $.cookie('hideTheModal', 'true', { expires: 30 });
      // очищаем форму
    //  setTimeout(function() {
     //  th.trigger("reset");
      //}, 1000);
    });
    return false;
  });
});