$(document).ready(function () {
  $(".one-post").hover(
    function (event) {
      $(event.currentTarget)
        .find(".one-post-shadow")
        .animate({ opacity: "0.2" }, 250);
    },
    function (event) {
      $(event.currentTarget)
        .find(".one-post-shadow")
        .animate({ opacity: "0" }, 250);
    },
  );

  var logoImg = $(".logo");
  var originalWidth = logoImg.width();
  var originalHeight = logoImg.height();

  logoImg.hover(
    function () {
      $(this).animate(
        { width: originalWidth + 35, height: originalHeight + 35 },
        250,
      );
    },
    function () {
      $(this).animate({ width: originalWidth, height: originalHeight }, 250);
    },
  );
});
