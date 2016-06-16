app.filter('inStock', function(){
	return function(input){
		return input == true ? 'Yes' : 'No';
	}
})

