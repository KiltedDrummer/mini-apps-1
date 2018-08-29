console.log('here')
document.getElementById('theForm').submit(function( event ) {
	  event.preventDefault();

	  console.log('Hit Next!');

		if (this.attributes[2].nodeValue === 'post') {
		  handlePost();
		} 
		else if (this.attributes[2].nodeValue === 'get') {
			handleGet();
		}

	});