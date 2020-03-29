

//＜ トグルボタンが押されたときに、クラスを付与する ＞
$(function() {
  $('.Toggle').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.NavMenu').addClass('active');
    } else {
      $('.NavMenu').removeClass('active');
    }
  });
});
