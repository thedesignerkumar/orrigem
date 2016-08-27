$(document).ready(function() {


    TweenMax.to("#logo-outer", 10, { rotation: 360, transformOrigin: "50% 50%", repeat: -1, repeatDelay: 0, ease: Power0.easeNone });

    $("#logo").click(function() {
        console.log("clicked");
    });

    $('#nav-menu a')
    .on('mouseover', function() {
        TweenMax.to($(this).find('g[id*=globe]'), 1, { rotation: 180, transformOrigin: "50% 50%"});
    })
    .on('mouseout', function(){
    	TweenMax.to($(this).find('g[id*=globe]'), 1, { rotation: 0, transformOrigin: "50% 50%"});
    });


});
