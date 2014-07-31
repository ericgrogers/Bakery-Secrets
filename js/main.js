

(function($){

    //================ Testing with Modernizr ==================
    //==========================================================

    Modernizr.load({
        test: Modernizr.input.required1 && Modernizr.inputtypes.email,
        yep: 'js/success.js',
        nope: ["includes/webshim/minified/polyfiller.js"],
        complete: function(){
            if(!Modernizr.input.required && !Modernizr.inputtypes.email){
                Modernizr.load('js/inputFail.js');
                console.log("shim loaded loaded");
            }else {
                console.log('complete loaded.')
            }
        }
    });

    //=========== Site Functionality =====================

    var linkColors = function(){
        var link = $('header a, #supplies a');


        $(link).on('click', function(e){

            $(link).each(function(){
                $(this).attr('id', '');
            });

            $(this).attr('id', 'active');

            // check to see if the clicked link was for the map.
            checkLink($(this).attr('class'));


            e.preventDefault();
            return false;
        });
    };

    var clearLinkColors = function(){
        $('header a, #supplies a').each(function(){
            $(this).attr('id', '');
        })
    };
    //========== Load the Header ========================
    var loadHead = function(){

        var wrapper = $('#wrapper');
        var header = $('header');
        var navLinks = $('nav a');
        var logo = $('h1');
        var tagline = $('header h2');

        window.onload = function(){

            //wrapper
            $(wrapper).show(0);

            // header
            $(header).hide(0).slideDown(1000);

            // navigation links
            $(navLinks).fadeOut(0).each(function(i,elem){
                setTimeout(function(){
                    $(elem).fadeIn(i*200);
                }, 2000);
            });

            // logo
            $(logo).slideUp(0).slideDown(2000);

            // tagline
            $(tagline).hide(0, 'swing', function(){
                setTimeout(function(){
                    $(tagline).fadeIn();
                }, 2000);
            });

        }
    };
//--------------------- End of header functionality. ---------------------

    //=============== load the content with Waypoints. ====================================
    var loadContent = function(){

        var aboutContent = $('.aboutContent'),
            dataChart = $('.dataChart'),
            imgGallery = $('#imageGallery'),
            gallery = $(imgGallery).find('#gallery'),
            images = $(gallery).find('img'),
            video = $('#video'),
            supplies = $('#supplies')
        ;



        // configure waypoint options.
        var point = {
            handler: function(){
                $(this).animate({opacity: 1}, 500);
            },
            offset: '70%',
            triggerOnce: true
        };

        // waypoint for the data chart
        var dataPoint = {
            handler: function(){
                clearLinkColors();
                $(this).animate({opacity: 1}, 500, function(){
                    animateChart();
                });
            },
            offset: '40%',
            triggerOnce: false
        };

        //  waypoint for the images li.
        var imgPoint = {
            handler: function(){
                clearLinkColors();
                $('nav a').eq(1).attr('id','active');
                setTimeout(function(){
                    $(images).each(function(i, elem){
                        $(elem).animate({opacity: 1},i*200);
                    });
                }, 800);
            },
            offset: '40%',
            triggerOnce: false
        };

        // waypoint for the supplies section
        var supPoint = {
            handler: function(){
                clearLinkColors();
                $('nav a').eq(2).attr('id', 'active');
                $(this).animate({opacity: 1}, 500);
            },
            offset: '50%',
            triggerOnce: false
        };



        //------- Add delayed waypoints. ------
        setTimeout(function(){
            $(aboutContent).waypoint(point);
            $(dataChart).waypoint(dataPoint);
            $(imgGallery).waypoint(point);
            $(gallery).waypoint(imgPoint);
            $(video).waypoint(point);
            $(supplies).waypoint(supPoint);
        }, 3000);

        //------- images hover effect -------
        var imgHover = function(){
            $(this).addClass('rotate');
        };

        // center the video


        // event listener for image hover.
        $(images).hover(imgHover, function(){
            $(this).removeClass('rotate');
        });
    };



//---------------- End of content functionality --------------------



    //================ Slider functionality. ==================================
    var slider = function(){

        // configurations
        var width = 1440;
        var animationSpeed = 600;
        var pause = 8000;
        var currentSlide = 1;
        var signUp = $('#signup');

        // cache the DOM
        var slider = $('#slider');
        var slideContainer = slider.find('.slides');
        var slides = slideContainer.find('.slide');


        // set the image slider to center
        var sliderPosition = function () {
            var x = (window.outerWidth - 1384) / 2;
            $(slider).css({left: x + "px"});
        };

        // set the cta button to center
        var btnPosition = function () {
            var x = (window.outerWidth - 330) / 2;
            $('#signup').css({left: x + 'px'});
        };

        var sliderRun = function(){
            setInterval(function(){
                slideContainer.animate({marginLeft: '-='+width}, animationSpeed, function(){
                    currentSlide++;
                    if(currentSlide === slides.length) {
                        currentSlide = 1;
                        slideContainer.css({marginLeft: 0});
                    }
                });
            }, pause);
        };

        var sliderShow = function(){
            $(slider).show(800);
            $(signUp).show(1000);
        };

        // Load and show the slider.
        var sliderInit = function(){
            sliderPosition();
            btnPosition();
            $(slider).animate({opacity: 1}, 500);
            sliderRun();
        };

        // Initialize the slider.
        sliderInit();
    };
//----------------- End of slider functionality. --------------------------

    //================ Map Functionality =========================

    var checkLink = function(link){

        var mapPos;

        switch (link) {
            case 'frosted':
                addMarker('St. Louis', 265, 110);
                break;
            case 'goodslice':
                addMarker('Jefferson City', 167, 120);
                break;
            case 'batterup':
                addMarker('Farmington', 270, 180);
                break;
            case 'franklin':
                addMarker('Branson', 120, 240);
                break;
            case 'goldenpie':
                addMarker('Kansas City', 60, 90);
                break;
            default :
                hideMarker();
        }

    };

    var addMarker = function(city, x, y){
        var marker = $('#marker');
        var cityName = $('#city').text(city);
        $(marker).css({
            left: x,
            top: y
        }).show();

        $(cityName).css({
            left: x -25,
            top: y
        }).show();


    };

    var hideMarker = function(){
        $('#marker, #city').hide();
    };


    //============ Global Event Listeners =================

    $('nav a').eq(0).on('click', function(e){

        e.preventDefault();
        return false;
    });

    $('nav a').eq(1).on('click', function(e){

        $("html, body").animate({ scrollTop: $('#gallerySeparator').offset().top}, 1000);
        e.preventDefault();
        return false
    });

    $('nav a').eq(2).on('click', function(e){

        $("html, body").animate({ scrollTop: $('#supplies').offset().top}, 1000);
        e.preventDefault();
        return false
    });

    //============= INIT ========================================
        var init = function(){
            $('.modal').egrModal();
            loadHead();
            setTimeout(function(){
                slider();
            },1500);
            setTimeout(function(){
                $('#signup').animate({opacity: 1}, 500);
            }, 2000);


            loadContent();
            linkColors();
            hideMarker();

        };


    init();
}(jQuery));