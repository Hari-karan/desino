/*
 * Copyright (c) 2017 Frenify
 * Author: Frenify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	//var H = jQuery( window ).height();
	//var W = jQuery( window ).width();
	
	macro_fn_home_slider_height();
	macro_fn_imgtosvg();
	macro_fn_hamburger();
	macro_fn_waypoint();
	macro_fn_flesslider();
	macro_fn_portfolio();
	macro_fn_magnific_popup();
	macro_fn_blog_animation();
	macro_fn_totop();
	macro_fn_totop_myhide();
	macro_fn_audiobox();
	macro_fn_audio_off();
	macro_fn_jarallax();
    macro_fn_nav_bg_scroll();
	macro_fn_contact_form();
	macro_fn_anchor();
	macro_fn_owl_carousel();
	macro_fn_miniboxes();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		macro_fn_totop_myhide();
		macro_fn_nav_bg_scroll();
	});
	
	jQuery(window).on('resize',function(){
		macro_fn_home_slider_height();
		macro_fn_miniboxes();
	});
	
	jQuery(window).on('load', function(e) {
		e.preventDefault();
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------
// -----------------------------------------------------
// ---------------  HOME SLIDER HEIGHT -----------------
// -----------------------------------------------------
function macro_fn_home_slider_height(){
	
	"use strict";
	
	var H			= jQuery(window).height();
	var element		= jQuery('.top_bg_content');
	
	element.css({height:H});
}
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------
function macro_fn_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------
function macro_fn_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.macro_fn_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}
// -----------------------------------------------------
// ----------------     WAYPOINT     -------------------
// -----------------------------------------------------
function macro_fn_waypoint(){
	
	"use strict";
	
	//var shortB			= jQuery('.macro_fn_section');
	//var child			= shortB.find('li');
	
	var listItem 		= jQuery('ul.macro_list.another_animation');
	
	listItem.each(function(){

		var Item		= jQuery(this);
		var ItemLi		= Item.find('li.list_li');
		
		ItemLi.each(function(index){
			var www		= jQuery(this);
			www.waypoint({
			handler: function(){
				setTimeout(function(){
					www.addClass('animated');
					www.addClass('slideInUp');
					www.removeClass('hideforanimation');
				},index*100);
			},
			offset: '70%'
		});
		});
	});
	
	var about			= jQuery('.macro_fn_about_me_wrap .my_image');
	var aboutDef		= jQuery('.macro_fn_about_me_wrap .image_definition');
	
		about.waypoint({
			handler: function(){
				setTimeout(function(){
					about.addClass('animated');
					about.addClass('fadeInLeft');
					about.removeClass('hideforanimation');
				},100);
				
			},
			offset: '70%'
		});
		
		aboutDef.waypoint({
			handler: function(){
				setTimeout(function(){
					aboutDef.addClass('animated');
					aboutDef.addClass('fadeInRight');
					aboutDef.removeClass('hideforanimation');
				},100);
				
			},
			offset: '70%'
		});
}
// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------
	jQuery('.macro_fn_counter').each(function() {
		
		"use strict";
		
        var el 			= jQuery(this);
		el.waypoint({
			handler: function(){
				
				if(!el.hasClass('stop')){
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},	
					});
				}
			},offset:'70%'	
		});
    });

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------
function tdProgress(container){

	"use strict";

	container.find('.macro_fn_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.macro_fn_bar_wrap');
		var pBar 			= progress.find('.macro_fn_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.macro_fn_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// --------------     MAIN FLEXSLIDER     --------------
// -----------------------------------------------------
function macro_fn_flesslider(){
	
	"use strict";
	
	var flexslider 			= jQuery('.macro_fn_testimonials_wrap .flexslider');
	
	flexslider.flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: true,
		slideshowSpeed: 5000,
		pauseOnAction: true,
		after: function(slider){
			if(!slider.playing){
				slider.play();
			}
		}
	});
	var  aa = jQuery('.eloisa_fn_mainslider .flex-direction-nav li a');
	aa.html('<span class="line"></span>');
}
// -----------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 
function macro_fn_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.macro_fn_portfolio_list');
		var filter		 = jQuery('.macro_fn_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}
	
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function macro_fn_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			type: 'iframe',
		});
	});
}
// -----------------------------------------------------
// --------------    BLOG ANIMATION    -----------------
// -----------------------------------------------------
function macro_fn_blog_animation(){
	"use strict";
	
	var element			= jQuery('.macro_fn_list_wrap.section_blog .list_li');
	
	element.each(function(){
		var list		= jQuery(this);
		var effect		= list.find('.description_blog');
		
		list.on('mouseenter',function(){
			effect.slideDown();
		}).on('mouseleave',function(){
			effect.slideUp();
		});
		
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function macro_fn_totop(){
	
	"use strict";
	
	jQuery(".macro_fn_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}
function macro_fn_totop_myhide(){
	
	"use strict";
	
	var toTop		=jQuery(".macro_fn_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}

// -----------------------------------------------------
// -----------------    AUDIOBOX    --------------------
// -----------------------------------------------------
function macro_fn_audiobox(){
	
	 "use strict";

	 var curPlaying; 
	 var speaker			= jQuery('.macro_fn_header .social_icons .audio'); 
	 
	 speaker.on('click',function(e) {

		e.preventDefault();
		 if(!speaker.hasClass('paused')){
			 speaker.addClass('paused');
		 }else{
			 speaker.removeClass('paused');
		 }
		var song 		= jQuery('audio')[0];

		if(song.paused){
			song.play();
			if(curPlaying) {jQuery("audio", "#"+curPlaying)[0].pause();}
		} 
		else {song.pause();}
		curPlaying 		= jQuery(this).parent()[0].id;
		 
	});
 }
function macro_fn_audio_off(){
	
	"use strict";
	
	var element			= jQuery('.macro_fn_wrapper_all');
	var dataAudio		= element.data('audio');
	var audioBox		= jQuery('.macro_fn_audio_wrap');
	
	if(dataAudio !== 'off'){
		audioBox.find('audio').attr('autoplay','');
	}
	
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------
function macro_fn_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------
function macro_fn_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.macro_fn_header');
	var windowScroll	= jQuery(window).scrollTop();
	
	 jQuery(window).scroll(function(){
            if(windowScroll >= '300'){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------
function macro_fn_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

function macro_fn_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var scrollOffset = 100;
	
	jQuery(".anchor > a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
	
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function macro_fn_owl_carousel(){
	
	"use strict";
	
	var carusel			= jQuery('.owl-carousel');
  	carusel.owlCarousel({
		loop:true,
		margin:0,
		autoplay:3000,
		autoWidth: false,
		nav: false,
		items:4
	});
	
	var	prev		= jQuery('.carousel_nav a.prev');
	var	next		= jQuery('.carousel_nav a.next');
	
	prev.on('click',function(){
		carusel.trigger('prev.owl.carousel');
		return false;
	});
	next.on('click',function(){
		carusel.trigger('next.owl.carousel');
		return false;
	});
}
// -----------------------------------------------------
// --------------------    MINI BOX   ------------------
// -----------------------------------------------------
function macro_fn_miniboxes(){
  "use strict";
	 
  var el 		= jQuery('.macro_fn_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    var child	= jQuery(element).children('.macro_fn_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    var W 		= jQuery(window).width();
    if(W > 460){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }