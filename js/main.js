

(function($){

    // Load the Header
    var loadHead = function(){

        var header = $('header');
        var navLinks = $('nav a');
        var logo = $('h1');
        var tagline = $('header h2');

        window.onload = function(){

            // header
            $(header).hide(0).slideDown(1000);

            // navigation links
            $(navLinks).fadeOut().each(function(i,elem){
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

    // Slider functionality.
    var slider = function(){

        // configurations
        var width = 1440;
        var animationSpeed = 1000;
        var pause = 5000;
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

        var init = function(){
            loadHead();
            setTimeout(function(){
                slider();
            },1500);
            setTimeout(function(){
                $('#signup').animate({opacity: 1}, 500);
            }, 2000);

        };


    init();
}(jQuery));