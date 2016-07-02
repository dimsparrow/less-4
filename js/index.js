var Homepage = {
	init: function(){
		this.bxslider();
		this.fullPage();
	},
	fullPage: function(){
		$('.fullpages').fullpage({

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

