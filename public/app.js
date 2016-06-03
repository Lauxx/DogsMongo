$(document).ready(function(){

	var getDogs = function(){
		

		$.ajax({
			method: 'GET', 
			url: '/dogs'
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

	var postDogs = function(){
		event.preventDefault();

		var name = $("#name").val();
		var breed = $("#breed").val();

		var dog = {};
		dog.name = name;
		dog.breed = breed;
		console.log(dog);

		$.ajax({
			method: 'POST',
			url: '/dogs', 
			data: dog
		}).then(function(data){
				$(".dogRow").append(`
				<tr>\
					<td>`+ data[data.length - 1].name + `</td>\
					<td>` + data[data.length - 1].breed +`</td>\
				</tr>\	
				`);
		});

	};

$('#postDog').on('click', postDogs);		

});

