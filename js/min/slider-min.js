// Custom Slider


// Variables

// Set index to 0
var currentSlide = 0;
// Store all slides
var $slides = $('.slider .slide');
// Store total number of slides
var $totalSlides = $slides.length;


// Functions
// ----------------------------

// Hides all slides, Displays Current index
function cycleSlides() {
  // stores current slide
  var $slide = $('.slider .slide').eq(currentSlide);
  // hides all slides
  $slides.hide();
  // display current slide
	$slide.show().fadeIn();

  // Original solution:
	//$slide.slideUp().css('display', 'inline-block');
}

// call click function when next button is clicked
$('.next').click(function() {
  // update current slide index
  currentSlide += 1;
  // if on last slide, resent index to 0
  if (currentSlide > $totalSlides - 1) {
    currentSlide = 0;
  }
  // run cycle slides function to display slide
  cycleSlides();
});

// call click function when prev button is clicked
$('.prev').click(function() {
  // update current slide index
  currentSlide -= 1;
  // if on first slide, move to last slide
  if (currentSlide < 0) {
    currentSlide = $totalSlides - 1;
  }
  // run cycle slides function to display slide
  cycleSlides();
});


