//Not working at the moment

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navBG");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
