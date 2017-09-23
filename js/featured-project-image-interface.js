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
