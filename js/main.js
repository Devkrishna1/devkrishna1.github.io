$(document).ready(function() {
  // General settings for all sliders
  function getFlexSliderSettings(min, max, move, itemWidth) {
      return {
          animation: "slide",
          animationLoop: false,
          slideshow: false,
          itemWidth: itemWidth,
          itemMargin: 5,
          minItems: min,
          maxItems: max,
          controlNav: false,
          directionNav: true,
          prevText: "",
          nextText: "",
          move: move
      };
  }

  // Initializing Project FlexSlider
  $('.flexslider').flexslider(getFlexSliderSettings(1, 3, 1, 840));

  // Initializing Skills FlexSlider
  $('.flexslider.skills').flexslider(getFlexSliderSettings(1, 3, 1, 688));

  // Adjusting sliders on window resize for more responsiveness
  $(window).resize(function() {
      var windowWidth = $(window).width();
      var settings_project = (windowWidth < 768) ? getFlexSliderSettings(1, 1, 1, 210) : getFlexSliderSettings(1, 3, 1, 840);
      var settings_skills = (windowWidth < 768) ? getFlexSliderSettings(1, 1, 1, 210) : getFlexSliderSettings(1, 3, 1, 688);
      $('.flexslider').data('flexslider').vars = $.extend($('.flexslider').data('flexslider').vars, settings_project);
      $('.flexslider.skills').data('flexslider').vars = $.extend($('.flexslider.skills').data('flexslider').vars, settings_skills);
  });
});

// Smooth scrolling for all anchors
$(document).ready(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
