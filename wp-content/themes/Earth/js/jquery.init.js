jQuery(function($){
		
	/**********************************
     **** Run on doc ready
    **********************************/
	$(document).ready(function(){

		// superFish
		$("#mainnav ul.sf-menu").superfish({ 
			autoArrows: true,
			animation: {opacity:'show', height:'show'},
			speed: 200,
			delay: 200
		});
		
		//remove current menu class from drop-downs
		$("ul.sf-menu ul li").removeClass("current-menu-item");
		
		//tipsy
		$('.tipsy-tooltip').tipsy({
			fade: true,
			gravity: 's'
		});
		
		//transparency for flickr embed
		$('#flickr-slideshow-wrap object').each(function(){
			$(this).prepend('<param name="wmode" value="transparent">');
			var flashHtml = $(this).html().replace ('<embed ', '<embed wmode="transparent"');
			$(this).html('');
			$(this).html(flashHtml);
		})
		
		//add param to flickr slideshow
		$(document.createElement('param'))
		.attr("name", "wmode")
		.attr("value", "transparent")
		.appendTo("#flickr-slideshow-wrap object");

		
		//styled image hover
		$("a.styled-img").hover(function(){
			$(this).children("img").stop(true, true).animate({ opacity: 0.5 }, 200 )
			$(this).children(".img-overlay").stop(true, true).fadeIn("normal")
			}, function(){
				$(this).children("img").stop(true, true).animate({ opacity: 1 }, 200 )
				$(this).children(".img-overlay").stop(true, true).fadeOut("normal")
		});
		
		//main social opacity
		$("#mastersocial a").css({ opacity: 0.8 });
		$("#mastersocial a, #staff-social a").hover(function(){
			$(this).css({ opacity: 1 })
			}, function(){
				$(this).css({ opacity: 0.8 })
			}
		);
		
		// back to top
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('a[href=#toplink]').fadeIn();
			} else {
				$('a[href=#toplink]').fadeOut();
			}
		});
		$('a[href=#toplink]').on('click', function(){
			$('html, body').animate({scrollTop:0}, 200);
			return false;
		});
		
		// Toggle	
		$(".toggle_container").hide(); 
		$("h3.trigger").click(function(){
			$(this).toggleClass("active").next().slideToggle("fast");
			return false; //Prevent the browser jump to the link anchor
		});
		
		// Tabvs & Accordion	
		$( ".tabs" ).tabs();
		$( ".accordion" ).accordion({
			autoHeight: false,
			speed: 200
		});

		//comment check
		$('#commentform').submit(function(e) {
			var $urlField = $(this).children('#url');
			if($urlField.val() == 'Website') {
				$urlField.val('')
			}
		});
		
		// Equal Heights
		function equalHeight(group) {
			var tallest = 0;
			group.each(function() {
				var thisHeight = $(this).height();
				if(thisHeight > tallest) {
					tallest = thisHeight;
				}
			});
			group.height(tallest);
		}
		equalHeight($(".event-entry"));
		
		$('#slider').slides({
			effect: 'slide',
			preload: false,
			generatePagination: true,
			autoHeight: false,
			next: 'slides_next',
			prev: 'slides_prev',
			play: false,
			pause: 2500,
			slideSpeed: 600,
			hoverPause: true,
			slideEasing: "easeOutQuad",
			slidesLoaded: function () { $("#slider a.slides_prev, #slider a.slides_next").fadeIn(300);  }
		});
	
	}); // END doc ready

});// END function