// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

	$(".change-state").on("click", function (event) {
		var id = $(this).data("id");
		var newState = $(this).data("newstate");
		var newestState = {
			devoured: newState
		};
		console.log(newestState);

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newestState
		}).then(
			function () {
				console.log("changed state to", newState);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var newBurger = {
			name: $("#ca").val().trim(),
			devoured: '0'
		};
		
		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function () {
				console.log("created new burger");
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});
////////////FIX THIS///PONER TACHITA
	$(".close").on('click',function () {

		
		var id = $(this).data("id");
		console.log(id);
		// Send the DELETE request.
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
			function () {
				console.log("deleted ", id);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	if($('#not-devList').children().length == 0 && $('#devList').children().length == 0)
	{
		$('#dev').css('display','none');
		$('#not-dev').css('display','none');
	}
	else{
		$('#dev').css('display','block');
		$('#not-dev').css('display','block');
	}


});
