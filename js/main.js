$(document).ready(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      slideshow: false,
      itemWidth: 840,
      itemMargin: 5,
      minItems: 1,
      maxItems: 3, 
      controlNav: false,
      directionNav: true,
      prevText: "",
      nextText: "",
      move: 3  
    });
  });

  $(document).ready(function() {
    $('.flexslider.skills').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 688,
      itemMargin: 5,
      minItems: 1,
      maxItems: 3, 
      controlNav: false,
      directionNav: true,
      prevText: "", 
      nextText: "",
      move: 3  
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});