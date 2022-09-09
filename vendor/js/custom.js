$(document).ready(function(){
	
		// Mobile Menus JS
	// Mobile Menus JS
	$('#menu').click(function(){
		$('.menu2 ul').slideToggle()
	});
	$('#menu').on('click', function () {
		$(this).toggleClass('active');
	});
	
	// owl carousel 
	// owl carousel 
	 // owlCarousel
      $('.banner-area-full').owlCarousel({
      items:1,
      loop:true,
      autoplay:true
       });
	   
	   
	  // secrch box
     // secrch box
	 // secrch box
	 
   $('.top-search a i').click(function(event){
   	$('.search-area').slideToggle();
        disabledEventPropagation(event);
   });

   $('.search-area').click(function(event){
      disabledEventPropagation(event);
   });

    $(document).click(function(event){
      $('.search-area').slideUp();
   });
   
	function disabledEventPropagation(event) {
	  if (event.stopPropagation) {
		event.stopPropagation();
	  } else if (window.event) {
		window.event.cancelBubble = true;
	  }
	}
    
	// mixitup js
	// mixitup js
	// mixitup js
	   
	    var option= {
		     animation: {
             enable: true,
			 effects: 'rotateY(-25deg)'   
          } 
		  }
		 
		var mixer = mixitup('.port',option);
	   
	 // magnific-popup js 
	 // magnific-popup js 
		   
	   	  $('.project-area .link').magnificPopup({
			  delegate: 'a',
			  type: 'image',
			  gallery: {
					enabled: true
				}
			
	});
	
	
	  
	 // scroll bar js
	 // scroll bar js
	 // scroll bar js
		  
	 $('.scroll-bar a').click(function(){
		  $('html,body').animate({
          scrollTop:0
        },2000);
        return false;
		 
	 });	
     
     $(window).scroll(function(){
		  if($(window).scrollTop()>1500){
			   $('.scroll-bar a').fadeIn(2000);
		 }else{
			 $('.scroll-bar a').fadeOut(2000);
		 }
		 
	 });	
	
	
	// accordian awesome tab
	// accordian awesome tab
	// accordian awesome tab
	
	 $('.card-header').click(function(){
		//  self clicking close 
		 if($(this).next(".card-body").hasClass("active")){
		 
		  $(this).next('.card-body').removeClass("active").slideUp()
		$(this).children("span").removeClass("fa-minus").addClass("fa-plus")
		 
		 }
		 else {   
		 $('.card .card-body').removeClass("active").slideUp()
		 $('.card .card-header span').removeClass("fa-minus").addClass("fa-plus");
		 $(this).next('.card-body').addClass("active").slideDown()
		$(this).children("span").removeClass("fa-plus").addClass("fa-minus")
		
		}
		
		
		});
	
	
	
	// smooth scroll 
	// smooth scroll
  $('#kajkorvai').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
	
});	
	
	   
});