$(document).ready(function() {
  $(".tab-btn").click(function() {
    // ボタンのアクティブ状態を切り替え
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // コンテンツを切り替え
    $(".main_cource-box").hide();
    var target = $(this).data("target");
    $(target).show();
  });
});

$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.nav_header').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});