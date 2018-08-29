

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
	        while (document.getElementById("results").childNodes.length > 0) {
	        	document.getElementById("results").firstChild.remove();
	        }
	        var tableKey = document.createElement('p');
	        tableKey.innerText = JSON.parse('"firstName, lastName, county, city ,role, sales, parentId"');
	        document.getElementById("results").appendChild(tableKey);
	        var node = document.createElement('p');
		    	node.innerText = JSON.parse(response);
	        document.getElementById("results").appendChild(node);
		    },
		    error: function (error, response) {
		    	console.log(error, response);
		    }
			})
		  document.getElementById('formData').value = '';
}
