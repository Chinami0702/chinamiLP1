 $(function () {
    $('#js-hamburger-menu').on('click', function () {
      $('.nav_header').fadeIn();
    });

    // メニュー外クリックで閉じたい場合：
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.nav_header, #js-hamburger-menu').length) {
        $('.nav_header').fadeOut();
      }
    });
  });
  
$(function () {
  $(".tab-btn").on("click", function () {
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    $(".main_cource-box").hide();
    $($(this).data("target")).show();
  });
});



