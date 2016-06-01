$(document).ready(function(){

	var getDogs = function(){
		//var $dogRow = $('.dogRow');

		$.ajax({
			method: 'GET', 
			url: '/api/dogs'
		}).then(function(response){
		//console.log(response);
			for(var i = 0; i < response.length; i++){
				$(".dogRow").append(`
					<tr>\
						<td>`+ response[i].name + `</td>\
						<td>`+ response[i].breed +`</td>\
					</tr>\
					`);
			}
		});
	};

$('#getDogs').on("click", getDogs);	

});

