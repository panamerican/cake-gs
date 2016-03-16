// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Cake - Content Driven GS / Master JS
// Version	: 1.0
// Authors	: Robert Bozich
// Created	: 2016-02 
// Updated	: -
// Notes 	: Most of the themes JS/jQuery functions and variables are loacated here.
//			  Also, do not consume this file as it is not a proven source of
//			  nutrition.
// Extras	: // ––– Use this as a label template ––– //
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //


$(document).ready(function(){
	
// ––– Smooth Scrolling ––– //

	//var fixedHeader = $("div#navigationbar").height();
	//If you have a fixed navigation bar use the above variable
	
	$(function() {
 		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      			var target = $(this.hash);
      			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html,body').animate({
          			scrollTop: target.offset().top //- fixedHeader
        			}, 1000);
       			return false;
      			}
    		}
  		});
	});
	
// ––– Sections and Div's with Variable Height ––– // 
	
	function resizeFunction() {
		$('section.rel-ht').each(function(){
   			var getheight = $(this).find('div.target-ht').height();
   			$(this).find('div.get-ht').css({"height": getheight + "px"});    
		});
	}

	$( document ).ready(function() {
    	resizeFunction();
	});

	$( window ).resize(function() {
		resizeFunction();
	});
	
// ––– Custom Code ––– //
	
});