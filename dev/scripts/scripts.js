$(document).ready(function() {

    // get the device width and height
    var devWidth = $(window).width();
    var devHeight = $(window).height();

    // init controller for scrollmagic
    var controller = new ScrollMagic.Controller();

    // logo animation
    TweenMax.to("#logo-outer", 10, {
        rotation: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        repeatDelay: 0,
        ease: Power0.easeNone
    });


    // navigation menu animation
    $('#nav-menu a')
        .on('mouseover', function() {
            TweenMax.to($(this).find('g[id*=globe]'), 1, {
                rotation: 180,
                transformOrigin: "50% 50%"
            });
        })
        .on('mouseout', function() {
            TweenMax.to($(this).find('g[id*=globe]'), 1, {
                rotation: 0,
                transformOrigin: "50% 50%"
            });
        });




    //     header-bee animation

    // bee-wing flutter animation

    TweenMax.to("#header-bee-wing-left", 0.01, {
        skewX: -25,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });
    TweenMax.to("#header-bee-wing-right", 0.01, {
        skewX: 25,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });

    // bee flying animation

    var tl_header_bee = new TimelineMax({
        repeat: -1
    });
    tl_header_bee
        .to("#header-bee", 5, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: devWidth / 6,
                    y: -devHeight / 4
                }, {
                    x: devWidth / 3,
                    y: -devHeight / 8
                }]
            },
            ease: Power2.easeOut
        })
        .to("#header-bee", 7, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: devWidth / 2.25,
                    y: -devHeight / 4
                }, {
                    x: devWidth / 1.5,
                    y: -devHeight / 8
                }]
            },
            ease: Power2.easeOut
        }, "+=2")
        .to("#header-bee", 10, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: devWidth / 0.75,
                    y: -devHeight / 4
                }, {
                    x: devWidth,
                    y: 0
                }]
            },
            ease: Power2.easeOut
        }, "+=3")
        .to("#header-bee", 1, {
            scaleX: -1
        })
        .to("#header-bee", 10, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: devWidth,
                    y: -devHeight / 4
                }, {
                    x: devWidth / 2,
                    y: 0
                }]
            },
            ease: Power2.easeOut
        }, "+=1")
        .to("#header-bee", 10, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: devWidth / 6,
                    y: -devHeight / 4
                }, {
                    x: -100,
                    y: 0
                }]
            },
            ease: Power2.easeOut
        }, "+=2")


    // paper plane animation

    var paper_plane_animation = TweenMax.to("#paper-plane", 5, {
        x: devWidth,
        y: -devHeight,
        ease: Power0.easeNone,
        onComplete: function() {
            TweenMax.to("#paper-plane", 0, {
                display: "none"
            });
        }
    });

    var scene_paper_plane = new ScrollMagic.Scene({
            triggerElement: "#paper-plane",
            reverse: false,
            offset: -250
        })
        .setTween(paper_plane_animation)
        .addTo(controller);

    // about us body animation
    var about_us_body = new TimelineMax();
    about_us_body
        .from(".about-main p", 5, {
            opacity: 0,
            y: 350
        })
        .from(".about-main-bg", 1, {
            opacity: 0
        }, 0);

    var scene_about_us_body = new ScrollMagic.Scene({
            triggerElement: ".about-main-bg",
            duration: 400,
        })
        .setTween(about_us_body)
        .addTo(controller);

    // flying squirrel animation

    var flying_squirrel = new TimelineMax();
    flying_squirrel
        .to("#flying-squirrel", 5, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: devWidth / 3,
                    y: devHeight / 2
                }, {
                    x: devWidth,
                    y: devHeight / 1.5
                }]
            },
            ease: Power4.easeOut,
        });

    var scene_flying_squirrel = new ScrollMagic.Scene({
            triggerElement: "#flying-squirrel",
            reverse: false,
            offset: 200
        })
        .setTween(flying_squirrel)
        .addTo(controller);

    // header bird animation

    TweenMax.to("#header-bird-wing", 2, {
        rotation: 10,
        transformOrigin: "right center",
        yoyo: true,
        repeat: -1,
        ease: Power0.easeNone
    });

    // header rocket animation

    var header_rocket_animation = new TimelineMax();
    header_rocket_animation
    .to("#header-rocket", 500, {
        x: -200,
        y: -500
    })
    .from("#header-rocket-thrust-cloud", 1, {
        scaleX: 0,
        scaleY: 0,
        repeat: -1,
        repeatDelay: 1,
        x: 30,
        y: -20,
        transformOrigin: "left top"
    }, 0)
    .from("#header-rocket-thrust-fire", 1, {
        autoAlpha: 0,
        repeat: -1,
        repeatDelay: 1,
    }, 0);


    // balloon animation

    var balloon_animation = new TimelineMax({repeat: -1, yoyo: true}) 
    balloon_animation
    .from("#about-balloon", 5, {
        rotation: 10,
        transformOrigin: "top center",
        ease: Power0.easeNone
    })
    .to("#about-balloon", 5, {
        rotation: -10,
        transformOrigin: "top center",
        ease: Power0.easeNone
    })

    // about bird musical notes animation

    var musical_notes_animation = new TimelineMax({repeat: -1, repeatDelay: 1});
    musical_notes_animation
    .from(".musical-notes-three", 1, {
        opacity: 0
    })
    .from(".musical-notes-two", 1, {
        opacity: 0
    })
    .from(".musical-notes-one", 1, {
        opacity: 0
    })
    .to(".musical-notes-three", 1, {
        opacity: 0
    }, 3.5)
    .to(".musical-notes-two", 1, {
        opacity: 0
    }, 3.5)
    .to(".musical-notes-one", 1, {
        opacity: 0
    }, 3.5)






});