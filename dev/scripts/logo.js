$(document).ready(function() {

    // logo animation
    TweenMax.to("#logo-outer", 10, { rotation: 360, transformOrigin: "50% 50%", repeat: -1, repeatDelay: 0, ease: Power0.easeNone });


    // navigation menu animation
    $('#nav-menu a')
        .on('mouseover', function() {
            TweenMax.to($(this).find('g[id*=globe]'), 1, { rotation: 180, transformOrigin: "50% 50%" });
        })
        .on('mouseout', function() {
            TweenMax.to($(this).find('g[id*=globe]'), 1, { rotation: 0, transformOrigin: "50% 50%" });
        });

    TweenMax.to("#header-bee-wing-left", 0.01, { skewX: -25, transformOrigin: "bottom center", yoyo: true, repeat: -1 });
    TweenMax.to("#header-bee-wing-right", 0.01, { skewX: 25, transformOrigin: "bottom center", yoyo: true, repeat: -1 });

    // header-bee animation
    function header_bee() {
        TweenMax.to("#header-bee", 0, { scaleX: 1, ease: Power0.easeNone, delay: 0.1 });
        TweenMax.to("#header-bee", 5, { bezier: { curviness: 1.5, values: [{ left: 50, top: -50 }, { left: 100, top: 0 }, { left: 75, top: 75 }, { left: 350, top: 0 }], autoRotate: false }, ease: Power0.easeNone, delay: 2, onComplete: beeComplete });

        function beeComplete() {
            TweenMax.to("#header-bee", 0, { scaleX: -1, ease: Power0.easeNone, delay: 0.1 });
            TweenMax.to("#header-bee", 5, { bezier: { curviness: 1.5, values: [{ left: -50, top: -50 }, { left: -100, top: 0 }, { left: -75, top: 75 }, { left: -350, top: 0 }], autoRotate: false }, ease: Power0.easeNone, delay: 5, onComplete: header_bee });
        }
    }
    header_bee();


    // header bird animation
    function bird_animation() {
        TweenMax.to("#header-bird-wing", 1, { rotation: 10, transformOrigin: "right center", onComplete: wingReverse, ease: Power0.easeNone });

        function wingReverse() {
            TweenMax.to("#header-bird-wing", 1, { rotation: 0, transformOrigin: "right center", onComplete: bird_animation, ease: Power0.easeNone });
        }
    }
    bird_animation();


    // paper plane animation
    
    // init controller
    // var controller = new ScrollMagic.Controller();

    // var paper_plane_animation = TweenMax.to("#paper-plane", 1, { x: 1300});

    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#paper-plane",
    //     offset: 100
    // })
    // .setPin("#paper-plane")
    // .setTween(paper_plane_animation)
    // .addTo(controller);

   

});
