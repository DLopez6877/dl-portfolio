$(function() {
  // About Me
  $('.about-nav').click(function() {
    $('#project-container').hide();
    $('#contact-container').hide();
    $('#about-container').show();
  });
  // Projects
  $('.projects-nav').click(function() {
    $('#about-container').hide();
    $('#contact-container').hide();
    $('#project-container').show();
  });
  // Contact
  $('.contact-nav').click(function() {
    $('#about-container').hide();
    $('#project-container').hide();
    $('#contact-container').show();
  });
});
