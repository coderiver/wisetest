
$(document).ready(function() {
	$('body').addClass('a');
	$('input:submit').click(function(event) {
		ff = $(this).parents('form')
		error = true;
		// validation here
		if(!ff.hasClass('shake') || error){
			ff.addClass('shake');	
			setTimeout(function(){ff.removeClass("shake");}, 500);
		}

		return false;
	});
});

