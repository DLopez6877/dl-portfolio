$(function() {
  //move large image
  $('#grid').mousemove(function(e) {
    var offset = e.originalEvent.offsetX * -1;
    $('.featured-image').css("background-position", "" + offset + "");
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
		"../../assets/images/robot-siyan-ren.jpeg",
		"../../assets/images/mike-dorner.jpg",
		"../../assets/images/freestocks-org.jpg",
		"../../assets/images/daniel-cheung.jpg",
		"../../assets/images/joanna-kosinska.jpg",
    "../../assets/images/devices1.png",
    "../../assets/images/devices2.png",
    "../../assets/images/devices3.png",
    "../../assets/images/devices4.png",
    "../../assets/images/devices5.png"
	)
});
