$(document).ready(function() {
	
	$('body').addClass('a');

	$('.wrapper').height($(window).height());
	$(window).resize(function(event) {
		$('.wrapper').height($(window).height());
	});
	// function supports_video() {
 //  		return !!document.createElement('video').canPlayType;
	// }
	// var video = "";
	// video += '<video id="video"   muted loop autoplay>';
	// video += 	'<source src="video/video.ogv" type="video/ogg">';
	// video += 	'<source src="video/video.mp4" type="video/mp4">';
	// video += 	'<source src="video/video.webm" type="video/webm">';
	// video +=  '</video>';


	// if(supports_video()){
	// 	$('.video').append(video);
	// 	$('#video').get(0).play();
	// }
	$('input:submit').click(function(event) {
		ff = $(this).parents('form')
		error = true;
		$('.input').addClass('is-error');
		// validation here
		if(!ff.hasClass('shake') || error){
			ff.addClass('shake');	
			setTimeout(function(){ff.removeClass("shake");}, 500);
		}

		return false;
	});
});
