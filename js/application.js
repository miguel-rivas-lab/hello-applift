$(document).ready( function(){

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollLeft: target.offset().left
				}, 1000);
				return false;
			}
		}
	});

	$.stellar({
		horizontalScrolling: false,
		verticalScrolling: true,
		horizontalOffset: 0,
		verticalOffset: 0,
		parallaxBackgrounds: true,
		parallaxElements: true,
		hideDistantElements: true,
		responsive: true
	});

	$("section.projects").find("button").click(function() {
		var ide = $(this).attr("class");
		$("section#modal")
			.find("article." + ide)
			.slideToggle(500)
			.siblings()
			.slideUp(500);
	});

});