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
