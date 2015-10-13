// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Place any jQuery/helper plugins in here.
// ---------------------------------------------------
// ---------------------------------------------------


// unslider
// ----------------------------------------------------

$(function() {
    $('.plan__slider').unslider({
      speed: 800,               //  The speed to animate each slide (in milliseconds)
      delay: false,              //  The delay between slide animations (in milliseconds)
      complete: function() {},  //  A function that gets called after every slide animation
      keys: true,               //  Enable keyboard (left, right) arrow shortcuts
      dots: true,               //  Display dot navigation
      fluid: true              //  Support responsive design. May break non-responsive designs
    });
});
