$(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
        $('.navigation').slideToggle(500)
        $('.hamburger-menu').toggleClass('hamburger-menu--open')
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



