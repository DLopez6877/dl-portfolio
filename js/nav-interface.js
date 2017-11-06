$(function() {
  // About Me
  $('.about-nav').click(function() {
    $('#project-container').hide();
    $('#contact-container').hide();
    $('#about-container').show();
    $('.projects-nav').removeClass('active-link')
    $(this).addClass('active-link')

  });
  // Projects
  $('.projects-nav').click(function() {
    $('#about-container').hide();
    $('#contact-container').hide();
    $('#project-container').show();
    $('.about-nav').removeClass('active-link')
    $(this).addClass('active-link')
  });
  // Contact
  $('.contact-nav').click(function() {
    $('#about-container').hide();
    $('#project-container').hide();
    $('#contact-container').show();
  });
});
