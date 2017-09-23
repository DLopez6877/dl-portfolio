(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {
  //move large image 
  $('#grid').mousemove(function(e) {
    var offset = e.originalEvent.offsetX * -1;
    $('.featured-image').css("background-position", "" + offset + "");
  });
});

$(function() {
  $('.image-link').click(function() {
    $('.featured-project-image').html($(this).html());
  });

  $('.featured-project-image').click( function() {
    var number;
    for (var i = 1; i <= 5; i++) {
      if ($(this).hasClass('project' + i))  {
        number = i;
      }
    }
    $(this).html('<img src="../assets/images/devices'+ number + '.png">');
  });
});

$(function() {
  $('.page-link1').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link1').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project1').show();
      $('.featured-project-image').html('<img src="../assets/images/devices1.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/robot-siyan-ren.jpeg)')
  });
  $('.page-link2').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link2').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project2').show();
      $('.featured-project-image').html('<img src="../assets/images/devices2.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/mike-dorner.jpg)')
  });
  $('.page-link3').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link3').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project3').show();
      $('.featured-project-image').html('<img src="../assets/images/devices3.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/freestocks-org.jpg)')
  });
  $('.page-link4').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link4').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project4').show();
      $('.featured-project-image').html('<img src="../assets/images/devices4.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/bart-larue.jpg)')
  });
  $('.page-link5').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link5').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project5').show();
      $('.featured-project-image').html('<img src="../assets/images/devices5.png">');
  });
});

},{}]},{},[1]);
