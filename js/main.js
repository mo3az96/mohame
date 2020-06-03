$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});
$(document).ready(function () {
    new WOW().init();
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arro_top").fadeIn(500) : $(".arro_top").fadeOut(500);
        if ($(this).scrollTop() >= 5) {
            $(".fixed-header").addClass("scroll-header");
        } else {
            $(".fixed-header").removeClass("scroll-header");
        }
    });
    $(".arro_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    /////////services-slider/////////
    $('.services-slider').owlCarousel({
        items: 5,
        margin: 10,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    /////////culture-slider/////////
    $('.culture-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    //////////////////article-slider////////////////
    $('.article-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    //////////////////blog-slider////////////////
    $('.blog-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    //////////////////blog-slider////////////////
    $('.team-slider').owlCarousel({
        items: 4,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    ////////////////////media///////////////
    if ($(window).width() <= 991) {
        $(".packes-sec .col-lg-3").unwrap();
        $(".packes-sec .pack").unwrap();
        $(".packes-sec").addClass("owl-carousel");
        $('.packes-sec').owlCarousel({
            items: 1,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            dots: true,
        });
        $(".clients-sec").addClass("owl-carousel");
        $('.clients-sec').owlCarousel({
            items: 2,
            margin: 15,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            dots: true,
        });


        $('.mo-menu-icon').click(function () {
            $(".sec-nav").fadeIn(300);
            $(".top-nav").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('.sec-nav').click(function () {
            $(".sec-nav").fadeOut(400);
            $(".top-nav").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.top-nav').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".sec-nav").fadeOut(400);
            $(".top-nav").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});