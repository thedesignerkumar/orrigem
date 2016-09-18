$(document).ready(function () {

    $("nav a").on("click", function (e) {
       
        e.preventDefault();
        var clickedLink = $(this).attr("xlink:href");
        var topY = $(clickedLink).offset().top-50;

        TweenMax.to($(window), 2, {
            scrollTo: {
                y: topY,
                autoKill: true
            },
            ease: Power3.easeInOut
        });
    });



})
