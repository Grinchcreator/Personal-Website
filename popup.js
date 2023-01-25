// PopUp Form and thank you popup after sending message
let $popOverlay = $(".popup-overlay");
let $popWindow = $(".popWindow");
let $subscribeWindow = $(".subscribe_window");
let $popThankYouWindow = $(".thank_you_window");
let $popClose = $(".close-btn");
let $popUp = $('.contact-btn');
let $subscribe = $(".subsribe-form")

//Open on click
$popUp.on("click", function(){
    $popOverlay.fadeIn();
    $popWindow.fadeIn();
  });

$(function() {
  // Close Pop-Up after clicking on the button "Close"
  $popClose.on("click", function() {
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
  });
 

 
  // Form Subscribe
  $subscribe.on("click", function(){
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
      $subscribeWindow.fadeOut();
      $popThankYouWindow.fadeIn();
      // используем куки на 30 дней, если человек заполнил форму
      // для куки обязательно должен быть подключен jquery.cookie.min.js
      $.cookie('hideTheModal', 'true', { expires: 30 });
      // очищаем форму
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});