$(function() {
  // About Me
  $('.about-nav').click(function() {
    $('#project-container').hide();
    $('#about-container').show();
  });
  // Projects
  $('.projects-nav').click(function() {
    $('#about-container').hide();
    $('#project-container').show();
  });
  // Contact
  $('.contact-nav').click(function() {
    $('.contact-info').slideToggle("slow", "swing", function(){
      console.log('¯\\_(ツ)_/¯ email me?');
    });
  });
});
