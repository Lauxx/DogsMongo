$(document).ready(function(){

	$.ajax({
		method: 'GET', 
		url: '/api/dogs'
	}).done(function(response){
		console.log(response);
	})


	
})

	