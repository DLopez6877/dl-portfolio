(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {
  //page load intro
  $('#grid').hide();
  setTimeout(function(){
    $('#intro').hide();
    $('#grid').fadeIn(1500);
  }, 2500);

  //move large image
  $('.featured-image').css("background-position", "" + $('.featured-image')[0].offsetWidth + "");
  $('html').mousemove(function(e) {
    var imageWidth = $('.featured-image')[0].offsetWidth;
    var htmlWidth = e.originalEvent.clientX;
    var offset = imageWidth - htmlWidth;
    var offset2 = -htmlWidth/2;
    if (offset > -imageWidth) {
      $('.featured-image').css("background-position", "" + offset + "");
    } else {
      $('.featured-image').css("background-position", "" + offset2 + "");
    }
  });

  //preload images
  var images = new Array()
	function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
		}
	}
	preload(
		"/assets/images/robot-siyan-ren.jpeg",
		"/assets/images/redd-angelo.jpeg",
		"/assets/images/freestocks-org.jpg",
		"/assets/images/daniel-cheung.jpg",
		"/assets/images/joanna-kosinska.jpg",
    "/assets/images/devices1.png",
    "/assets/images/devices2.png",
    "/assets/images/devices3.png",
    "/assets/images/devices4.png",
    "/assets/images/devices5.png"
	)
});

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
      $('.featured-image').css('background-image', 'url(/assets/images/daniel-cheung.jpg)');
      $('body').css('background', '#542908');
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
      $('.featured-image').css('background-image', 'url(/assets/images/joanna-kosinska.jpg)');
      $('body').css('background', '#3e5800');
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

},{}]},{},[1]);
