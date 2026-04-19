$(document).ready(function () {
  var scrolled = 0;
  var $parallaxElements = $(".icons-for-parallax img");
  var startPositions = [];

  $parallaxElements.each(function () {
    startPositions.push(parseInt($(this).css("top")) || 0);
  });

  $(window).scroll(function () {
    scrolled = $(window).scrollTop();

    for (var i = 0; i < $parallaxElements.length; i++) {
      var speed = 0.15 * (i + 1);
      var yPosition = startPositions[i] + scrolled * speed;
      $parallaxElements.eq(i).css({ top: yPosition });
    }
  });
});
