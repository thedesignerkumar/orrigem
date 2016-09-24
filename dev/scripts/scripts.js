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
        .to("#flying-squirrel", 10, {
            bezier: {
                curviness: 1.5,
                autoRotate: false,
                values: [{
                    x: 100,
                    y: -100
                }, {
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
    .to("#header-rocket", 2000, {
        x: -200,
        y: -2000
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
    .from(".musical-notes-four", 1, {
        opacity: 0
    });

// about squirrel animation

var about_squirrel = new TimelineMax({repeat: -1, repeatDelay: 3});
about_squirrel
.from("#about-squirrel-right-eye", 0.5, {scaleY: 0, transformOrigin: "bottom center"})
.from("#about-squirrel-left-eye", 0.5, {scaleY: 0, transformOrigin: "bottom center"}, 0);

// work bee animation
TweenMax.to("#work-bee-left-wing", 0.02, {
        skewX: -45,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });
    TweenMax.to("#work-bee-right-wing", 0.02, {
        skewX: 45,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });

// monkey animation
var monkey = new TimelineMax({repeat: -1});
monkey
.from("#monkey-full", 1, {
        rotation: 2,
        transformOrigin: "top center",
        ease: Power0.easeNone
    })
    .to("#monkey-full", 1, {
        rotation: 2,
        transformOrigin: "top center",
        ease: Power0.easeNone
    });

// monkey eye animation
var monkey_eye = new TimelineMax({repeat: -1, repeatDelay: 3});
monkey_eye
.from(".monkey-eye", 0.5, {scaleY: 0, transformOrigin: "bottom center"});

// color drops animation
var color_drops = new TimelineMax({repeat: -1});
color_drops
.from(".color-drop-two", 1, {y: -25})
.from(".color-drop-one", 1, {scaleY: 0, transformOrigin: "top center"}, 0.5);

// water sprinkles animation
var sprinkles = new TimelineMax({repeat: -1, repeatDelay: 1.5, ease: Power0.easeNone});
sprinkles
.from(".sprinkles-one", 0.3, {scaleX: 0, transformOrigin: "left center"}, 0.5)
.from(".sprinkles-two", 0.3, {scaleX: 0, transformOrigin: "left center"}, "-=0.1")
.from(".sprinkles-three", 0.3, {scaleX: 0, transformOrigin: "left center"}, "-=0.1");

// fish animation

var fish_speed = Math.floor((Math.random() * 10) + 5);

var left_fish = new TimelineMax({repeat: -1});
left_fish
.from("#left-fish", fish_speed, {x: 125,})
.to("#left-fish", fish_speed, {x: -25,})
.to("#left-fish", 0.05, {scaleX: -1, transformOrigin: "center center"})
.to("#left-fish", fish_speed, {x: 170})
.to("#left-fish", 0.05, {scaleX: -1, transformOrigin: "center center"});

var top_fish = new TimelineMax({repeat: -1});
top_fish
.from("#top-fish", fish_speed, {x: -125,})
.to("#top-fish", 5, {x: 105,})
.to("#top-fish", 0.01, {scaleX: -1, transformOrigin: "center center"})
.to("#top-fish", fish_speed, {x: -120})
.to("#top-fish", 0.01, {scaleX: -1, transformOrigin: "center center"});

var right_fish = new TimelineMax({repeat: -1});
right_fish
.from("#right-fish", fish_speed, {x: 125,})
.to("#right-fish", fish_speed, {x: -200,})
.to("#right-fish", 0.01, {scaleX: -1, transformOrigin: "center center"})
.to("#right-fish", fish_speed, {x: 120})
.to("#right-fish", 0.01, {scaleX: -1, transformOrigin: "center center"});

var bottom_fish = new TimelineMax({repeat: -1});
bottom_fish
.from("#bottom-fish", fish_speed, {x: -25,})
.to("#bottom-fish", fish_speed, {x: 20,})
.to("#bottom-fish", 0.01, {scaleX: -1, transformOrigin: "center center"})
.to("#bottom-fish", fish_speed, {x: -20})
.to("#bottom-fish", 0.01, {scaleX: -1, transformOrigin: "center center"});

// water bubble animation
var bubble_speed = Math.floor((Math.random() * 5) + 3);

TweenMax.from(".water-bubble-two", Math.floor((Math.random() * 5) + 1), {opacity: 0, y: 25, scaleX: 0, scaleY: 0, transformOrigin: "center center", repeat: -1, repeatDelay: Math.floor((Math.random() * 5) +1)});
TweenMax.from(".water-bubble-one", Math.floor((Math.random() * 5) + 1), {opacity: 0, y: 25, scaleX: 0, scaleY: 0, transformOrigin: "center center", repeat: -1, repeatDelay: Math.floor((Math.random() * 5) +1)});
TweenMax.from(".water-bubble-three", Math.floor((Math.random() * 5) + 1), {opacity: 0, y: 25, scaleX: 0, scaleY: 0, transformOrigin: "center center", repeat: -1, repeatDelay: Math.floor((Math.random() * 5) +1)});
TweenMax.from(".water-bubble-four", Math.floor((Math.random() * 5) + 1), {opacity: 0, y: 25, scaleX: 0, scaleY: 0, transformOrigin: "center center", repeat: -1, repeatDelay: Math.floor((Math.random() * 5) +1)});
TweenMax.from(".water-bubble-five", Math.floor((Math.random() * 5) + 1), {opacity: 0, y: 25, scaleX: 0, scaleY: 0, transformOrigin: "center center", repeat: -1, repeatDelay: Math.floor((Math.random() * 5) +1)});
TweenMax.from(".water-bubble-six", Math.floor((Math.random() * 5) + 1), {opacity: 0, y: 25, scaleX: 0, scaleY: 0, transformOrigin: "center center", repeat: -1, repeatDelay: Math.floor((Math.random() * 5) +1)});

// bottom bee animation
TweenMax.to(".bottom-bee-left-wing", 0.01, {
        skewX: -25,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });
    TweenMax.to(".bottom-bee-right-wing", 0.01, {
        skewX: 25,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });

// testimonial bee animation
TweenMax.to(".testimonial-bee-left-wing", 0.01, {
        skewX: -25,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });
    TweenMax.to(".testimonial-bee-right-wing", 0.01, {
        skewX: 25,
        transformOrigin: "bottom center",
        yoyo: true,
        repeat: -1
    });

// hello testing
TweenMax.to(".hello", 1, {x: 25});








});