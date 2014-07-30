

(function($){

    //=========== Site Functionality =====================

    var linkColors = function(){
        var link = $('a');

        $(link).on('click', function(e){

            $(link).each(function(){
                $(this).attr('id', '');
            });

            $(this).attr('id', 'active');

            e.preventDefault();
            return false;
        });
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
                $(this).animate({opacity: 1}, 500, function(){
                    animateChart();
                });
            },
            offset: '40%',
            triggerOnce: true
        };

        //  waypoint for the images li.
        var imgPoint = {
            handler: function(){
                //$(this).animate({opacity: 1}, 500);
                setTimeout(function(){
                    $(images).each(function(i, elem){
                        $(elem).animate({opacity: 1},i*200);
                    });
                }, 800);
            },
            offset: '60%',
            triggerOnce: true
        };



        //------- Add delayed waypoints. ------
        setTimeout(function(){
            $(aboutContent).waypoint(point);
            $(dataChart).waypoint(dataPoint);
            $(imgGallery).waypoint(point);
            $(gallery).waypoint(imgPoint);
            $(video).waypoint(point);
            $(supplies).waypoint(point);
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



    //============= INIT ========================================
        var init = function(){
            loadHead();
            setTimeout(function(){
                slider();
            },1500);
            setTimeout(function(){
                $('#signup').animate({opacity: 1}, 500);
            }, 2000);
            $('video').mediaelementplayer();

            loadContent();
            linkColors();
        };


    init();
}(jQuery));