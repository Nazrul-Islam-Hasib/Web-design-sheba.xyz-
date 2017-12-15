jQuery(document).ready(function(){
    
    new WOW().init();



    //responsive menu btn
     jQuery(".menu-btn i").click(function(){
      jQuery(".menu-area").slideToggle();
     })
     jQuery(window).resize(function(){
      var screenSize=jQuery(window).width();
      if (screenSize > 768) {
        jQuery(".menu-area").removeAttr("style");
      }
     })
	//counter strats
 	var a = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 4000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });
        });
        a = 1;
      }
    });

    //counter ends

    $('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })

    jQuery(window).scroll(function(){
      var distance = jQuery(window).scrollTop(); 

      if (distance > 198) {
        jQuery(".up-btn").fadeIn();
      }
      else{
        jQuery(".up-btn").fadeOut();
      }
    });
    jQuery(".up-btn").click(function(){
      jQuery("html").animate({'scrollTop' : 0},2000)
    })
   
});