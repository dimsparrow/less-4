var Homepage = {
	init: function(){
		this.fullPage();
	},
	fullPage: function(){
		$('.fullpages').fullpage({
			paddingTop:  $('.header').outerHeight(),
			paddingBottom: $('.info').outerHeight(),
			fixedElements: '.header, .info',
		});
	}

};


$(window).on('load', function(){
	Homepage.init();
});

