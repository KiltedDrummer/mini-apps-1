

var handlePost = () => {
	$.ajax({
				type: 'POST',
				url: "http://localhost:3000",
				data: {
					params: document.getElementById('formData').value,
					query: [$( "#myselect option:selected" ).val(), document.getElementById('filterWord').value]
				},
				dataType: 'application/json',
				error: function (response) {
					// response here should be the csv line from server, each entry on a newline
	        console.log('*******************'); // for testing
	        // render the data to screen
	        document.getElementById("results").firstChild.remove();
	        var node = document.createElement('p');
		    	node.innerText = JSON.parse(response.responseText);
		        document.getElementById("results").appendChild(node)
		        console.log(response.responseText);
		    }
		    // error: function (error, response) {
		    // 	console.log(error, response);
		    // }
			})
		  document.getElementById('formData').value = '';
}
