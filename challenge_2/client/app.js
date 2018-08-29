

var handlePost = () => {

	// var temp = $( "#myselect option:selected" ).val();

	$.ajax({
				type: 'POST',
				url: "http://localhost:3000",
				data: JSON.stringify({
									params: document.getElementById('formData').value,
									query: [$( "#myselect option:selected" ).val(), document.getElementById('filterWord').value]
								}),
				 contentType: 'application/json',
				success: function (response) {
					// response here should be the csv line from server, each entry on a newline
	        console.log('*******************'); // for testing
	        // render the data to screen
	        document.getElementById("results").firstChild.remove();
	        var node = document.createElement('p');
		    	node.innerText = JSON.parse(response);
		        document.getElementById("results").appendChild(node)
		        console.log(JSON.parse(response));
		    },
		    error: function (error, response) {
		    	console.log(error, response);
		    }
			})
		  document.getElementById('formData').value = '';
}
