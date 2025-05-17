$(document).ready(function() {
  $(".tab-btn").click(function() {
    // ボタンのアクティブ状態を切り替え
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // コンテンツを切り替え
    $(".tab-content").hide();
    var target = $(this).data("target");
    $(target).show();
  });
});