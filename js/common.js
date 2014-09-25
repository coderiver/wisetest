$(document).ready(function() {
	
	$('body').addClass('a');
	$('.wrapper').height($(window).height());
	$(window).resize(function(event) {
		$('.wrapper').height($(window).height());
	});

	function isValidEmailAddress(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    	return pattern.test(emailAddress);
	};
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
	// $('input:submit').click(function(event) {
	// 	ff = $(this).parents('form')
	// 	error = true;
	// 	$('.input').addClass('is-error');
	// 	// validation here
	// 	if(!ff.hasClass('shake') || error){
	// 		ff.addClass('shake');	
	// 		setTimeout(function(){ff.removeClass("shake");}, 500);
	// 	}

	// 	return false;
	// });

	$('.input').focus(function(event) {
		$(this).removeClass('is-error');
	});
	$("form").submit(function() {

			error = false;
			//checking
			//name
			if($('#name').val()==''){
				$('#name').addClass('is-error');
				error = true;
			}
			//email
			if(!isValidEmailAddress($('#email').val())){
				$('#email').addClass('is-error');
				error = true;
			}
			//shakeit
			if(!$('form').hasClass('shake') && error){
				$('form').addClass('shake');	
				setTimeout(function(){$('form').removeClass("shake");}, 500);
			}
			else{
				var url = "/send.php"; // the script where you handle the form input.

				$.ajax({
				       type: "POST",
				       url: url,
				       data: $("form").serialize(), // serializes the form's elements.
				       success: function(data)
				       {
				           $('form').addClass('is-sent');
				           console.log(data);
				           setTimeout(function(){$('.form').removeClass("is-sent");}, 2000);
				       }
				     });
			}

	    

	    return false; // avoid to execute the actual submit of the form.
	});
});
