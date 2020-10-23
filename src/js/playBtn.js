jQuery(document).ready(function() {
	jQuery('.play i').click(function(event){
	   event.preventDefault();
	  //var url = $(this).html(); //this will not work	
	   $(".js-video").append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yXQViqx6GMY?autoplay=1" frameborder="0" allowfullscreen></iframe>');
		$(this).hide();
		//$('video-poster').css('z-index','-1');
		
	});
});