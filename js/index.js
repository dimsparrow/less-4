var Homepage = {
	init: function(){
		this.bxslider();
		this.fullPage();
	},
	fullPage: function(){
		$('.fullpages').fullpage({
			paddingTop:  $('.header').outerHeight(),
			paddingBottom: $('.footer').outerHeight(),
			fixedElements: '.header, .info',
		});
	},
	bxslider: function(){
		$('.bxslider').bxSlider({

		});
	}
};


$(window).on('load', function(){
	Homepage.init();
});

