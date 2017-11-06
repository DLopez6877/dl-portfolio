$(function() {
  //prev and next arrow
  $('#prev').click(function() {
    $('.description').hide();
    $('.featured-project').show();
    let pageLinks = ['.page-link1', '.page-link2', '.page-link3', '.page-link4', '.page-link5'];
    for (var i = 0; i < pageLinks.length; i++) {
      if ($(pageLinks[i]).hasClass("active-page-link")) {
        if (i == 0) {
          $(pageLinks[4]).click();
        } else {
          $(pageLinks[i - 1]).click();
        }
        break;
      }
    }
  });
  $('#next').click(function() {
    $('.description').hide();
    $('.featured-project').show();
    let pageLinks = ['.page-link1', '.page-link2', '.page-link3', '.page-link4', '.page-link5'];
    for (var i = 0; i < pageLinks.length; i++) {
      if ($(pageLinks[i]).hasClass("active-page-link")) {
        if (i == 4) {
          $(pageLinks[0]).click();
        } else {
          $(pageLinks[i + 1]).click();
        }
        break;
      }
    }
  });

  //show more info
  $('.learn-more').click(function() {
    $('.featured-project').hide();
    $('.description').show();
    //show scroll inicator if container larger than screen
    var element = document.querySelector('#project-container');
    if (element.offsetHeight < element.scrollHeight ||
    element.offsetWidth < element.scrollWidth) {
      //element has overflow
      $('.scroll-indicator').show();
    }
  });

  //hide scroll-indicator on scroll down
  $( "#project-container" ).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.scroll-indicator').fadeOut();
    }
  });

  //return to overview pages
  $('.back-overview').click(function() {
    $('.description').hide();
    $('.featured-project').show();
  });

  //pagination
  $('.page-link1').click(function() {
      $('.description').hide();
      $('.featured-project').show();
      $('.page-link').removeClass('active-page-link');
      $('.page-link1').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project1').show();
      $('.featured-project-image').html('<img src="/assets/images/devices1.png">');
      $('.featured-image').css('background-image', 'url(/assets/images/robot-siyan-ren.jpeg)');
      $('body').css('background', '#000');
  });
  $('.page-link2').click(function() {
      $('.description').hide();
      $('.featured-project').show();
      $('.page-link').removeClass('active-page-link');
      $('.page-link2').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project2').show();
      $('.featured-project-image').html('<img src="/assets/images/devices2.png">');
      $('.featured-image').css('background-image', 'url(/assets/images/joanna-kosinska.jpg)');
      $('body').css('background', '#3e5800');
  });
  $('.page-link3').click(function() {
      $('.description').hide();
      $('.featured-project').show();
      $('.page-link').removeClass('active-page-link');
      $('.page-link3').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project3').show();
      $('.featured-project-image').html('<img src="/assets/images/devices3.png">');
      $('.featured-image').css('background-image', 'url(/assets/images/freestocks-org.jpg)');
      $('body').css('background', '#004380');
  });
  $('.page-link4').click(function() {
      $('.description').hide();
      $('.featured-project').show();
      $('.page-link').removeClass('active-page-link');
      $('.page-link4').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project4').show();
      $('.featured-project-image').html('<img src="/assets/images/devices4.png">');
      $('.featured-image').css('background-image', 'url(/assets/images/daniel-cheung.jpg)');
      $('body').css('background', '#542908');
  });
  $('.page-link5').click(function() {
      $('.description').hide();
      $('.featured-project').show();
      $('.page-link').removeClass('active-page-link');
      $('.page-link5').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project5').show();
      $('.featured-project-image').html('<img src="/assets/images/devices5.png">');
      $('.featured-image').css('background-image', 'url(/assets/images/redd-angelo.jpeg)');
      $('body').css('background', '#251366');
  });
});
