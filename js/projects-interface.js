$(function() {
  var transitioning = false;
  var transitionSpeed = 400;
  var transitioningDelay = transitionSpeed * 2 + 100;
  $('.page-link1').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link1').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project1').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link2').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link2').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project2').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link3').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link3').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project3').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link4').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link4').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project4').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
  $('.page-link5').click(function() {
    if (transitioning === false) {
      transitioning = true;
      $('.page-link').removeClass('.active-page-link');
      $('.page-link5').addClass('.active-page-link');
      $('.feature-wrapper').fadeOut(transitionSpeed);
      $('#project5').delay(transitionSpeed + 100).fadeIn(transitionSpeed);
      setTimeout(function() {
        transitioning = false;
      }, transitioningDelay);
    }
  });
});
