$(function() {
  $('.page-link1').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link1').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project1').show();
      $('.featured-project-image').html('<img src="../assets/images/devices1.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/robot-siyan-ren.jpeg)')
      $('body').css('background', '#000');
  });
  $('.page-link2').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link2').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project2').show();
      $('.featured-project-image').html('<img src="../assets/images/devices2.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/mike-dorner.jpg)')
      $('body').css('background', '#2c87a5');
  });
  $('.page-link3').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link3').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project3').show();
      $('.featured-project-image').html('<img src="../assets/images/devices3.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/freestocks-org.jpg)')
      $('body').css('background', '#004380');
  });
  $('.page-link4').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link4').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project4').show();
      $('.featured-project-image').html('<img src="../assets/images/devices4.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/bart-larue.jpg)')
      $('body').css('background', '#0a0721');
  });
  $('.page-link5').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link5').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project5').show();
      $('.featured-project-image').html('<img src="../assets/images/devices5.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/daniel-cheung.jpg)')
      $('body').css('background', '#2c1e07');
  });
});
