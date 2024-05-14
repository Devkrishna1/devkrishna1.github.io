$(document).ready(function() {
    // Function to get settings
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
  
    // Initial setup based on window size
    function setupFlexSliders() {
      var windowWidth = $(window).width();
      var projectSettings = (windowWidth < 768) ? getFlexSliderSettings(1, 1, 1, 210) : getFlexSliderSettings(1, 1, 1, 840);
      var skillsSettings = (windowWidth < 768) ? getFlexSliderSettings(1, 1, 1, 210) : getFlexSliderSettings(1, 1, 1, 750);
  
      if ($('.flexslider.projects').data('flexslider')) {
        $('.flexslider.projects').flexslider('destroy'); // Destroy current initialization
      }
      $('.flexslider.projects').flexslider(projectSettings); // Re-initialize
  
      if ($('.flexslider.skills').data('flexslider')) {
        $('.flexslider.skills').flexslider('destroy'); // Destroy current initialization
      }
      $('.flexslider.skills').flexslider(skillsSettings); // Re-initialize
    }
  
    // Initial call
    setupFlexSliders();
  
    // Adjust on window resize
    $(window).resize(setupFlexSliders);
  });
  
