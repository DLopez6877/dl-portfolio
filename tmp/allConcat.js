var exampleModule = require('./../js/script.js').exampleModule;

$(function() {
  $('#grid').mousemove(function(e) {
    var offset = e.originalEvent.offsetX * -1;
    $('.featured-image').css("background-position", "" + offset + "");
  });
});
