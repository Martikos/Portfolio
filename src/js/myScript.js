window.onload = function () {
  $("a").on("click", function() {
      var id = $(this).data("section");

      $("section:visible").fadeOut(function() {
              $(id).fadeIn();
          });
          /*
      $('section').masonry({
          itemSelector: 'section div',
          columnWidth: 240,
          animationOptions: {
            duration: 400
          }
      });
      */

  });
};
