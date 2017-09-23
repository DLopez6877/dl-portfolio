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

  var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"../../assets/images/robot-siyan-ren.jpeg",
				"../../assets/images/mike-dorner.jpg",
				"../../assets/images/freestocks-org.jpg",
				"../../assets/images/bart-larue.jpg",
				"../../assets/images/daniel-cheung.jpg"
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
      $('#nav-ul').toggleClass('contact-height');
      console.log('¯\\_(ツ)_/¯ email me?');
    });
  });
});

$(function() {
  $('.page-link1').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link1').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project1').show();
      $('.featured-project-image').html('<img src="../assets/images/devices1.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/robot-siyan-ren.jpeg)');
      $('body').css('background', '#000');
  });
  $('.page-link2').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link2').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project2').show();
      $('.featured-project-image').html('<img src="../assets/images/devices2.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/mike-dorner.jpg)');
      $('body').css('background', '#2c87a5');
  });
  $('.page-link3').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link3').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project3').show();
      $('.featured-project-image').html('<img src="../assets/images/devices3.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/freestocks-org.jpg)');
      $('body').css('background', '#004380');
  });
  $('.page-link4').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link4').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project4').show();
      $('.featured-project-image').html('<img src="../assets/images/devices4.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/bart-larue.jpg)');
      $('body').css('background', '#0a0721');
  });
  $('.page-link5').click(function() {
      $('.page-link').removeClass('active-page-link');
      $('.page-link5').addClass('active-page-link');
      $('.feature-wrapper').hide();
      $('#project5').show();
      $('.featured-project-image').html('<img src="../assets/images/devices5.png">');
      $('.featured-image').css('background-image', 'url(../../assets/images/daniel-cheung.jpg)');
      $('body').css('background', '#2c1e07');
  });
});
