/**
 * Created by ericrogers on 7/30/14.
 */




    //================ Testing with Modernizr ==================
    //==========================================================

Modernizr.load({
    test: Modernizr.input.required && Modernizr.inputtypes.email && Modernizr.video,
    yep: ['js/success.js', 'js/main.js', 'includes/plugins/jquery.egrModal.js', 'includes/plugins/waypoints.min.js', 'includes/plugins/lightbox.min.js', 'includes/plugins/chart.js'],
    nope: ["includes/webshim/minified/polyfiller.js"],
    complete: function () {
        if (!Modernizr.input.required && !Modernizr.inputtypes.email) {
            Modernizr.load('js/inputFail.js');
        }
        if (!Modernizr.video) {
            Modernizr.load('js/vidFail.js');
            console.log('got vid');
        }
    }
});