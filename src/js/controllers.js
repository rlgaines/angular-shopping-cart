//look at what the controllers are called in routes.js


app.controller('detailsController', ['$scope', 'ShoppingService', function($scope, ShoppingService) {
	$scope.inventory = ShoppingService.getInfo();
	$scope.categories = ShoppingService.concatArray();
	$scope.total = function(amount, price){
		return ShoppingService.totalPrice(amount, price)
	}
	$scope.checkOutInfo = function(name, price, image, caffeineScale, ingredients, rating, amount){
  		return ShoppingService.chargesPage(name, price, image, caffeineScale, ingredients, rating, amount)
  	}


}]);

app.controller('chargesController', ['$scope', 'ShoppingService', 'chargesService', 
	function($scope, ShoppingService, chargesService) {	

	$scope.price = ShoppingService.getOrderTotal();
	$scope.orderInfo = ShoppingService.getChargesPage();
	$scope.updatePrice = function(amount, price, name, totalPrice){
		totalPrice = $scope.price
		 return newPrice = chargesService.newChargePrice(parseInt(amount), price, name, $scope.orderInfo, totalPrice)
		// console.log('CONTROLLER:','newPrice:', newPrice, 'orderInfo:', $scope.orderInfo, 'total:', totalPrice)
		
	}
	$scope.remove = function(object, array ){
		price = $scope.price
		return chargesService.allGone(object,array)
	}
	//////HERE UPDATING PRICE TOTAL UPDATE ON CHARGE PAGE
	$scope.orderTotal = function(price){
		chargesService.returnNewTotal(price, $scope.orderInfo);	
	}
}]);