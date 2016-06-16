
app.directive("makeEditable", function (){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/details.html',
		// link: function (scope, element, attrs){
		// }
	}
});
