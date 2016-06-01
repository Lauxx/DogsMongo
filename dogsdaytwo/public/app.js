$(document).ready(function(){

	var getDogs = function(){
		

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
			url: '/api/dogs', 
			data: dog
		}).then(function(data){
			console.log("I made a puppy", data);
			for(var i = 0; i < data.length; i++){
				$(".dogRow").append(`
				<tr>\
					<td>`+ data[i].name + `</td>\
					<td>` + data[i].breed +`</td>\
				</tr>\	
				`);
			};
		});
	};

$('#postDog').on('click', postDogs);		

});

