app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/details.html',
      controller: 'detailsController'
    })
    .when('/charges', {
      templateUrl: 'templates/charges.html',
      controller: 'chargesController'
    })
    .otherwise('/');
});