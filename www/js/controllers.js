angular.module('starter.controllers', [])

.controller('RestaurantsCtrl', function($scope, Restaurant) {
        $scope.Restaurants = Restaurant.all();
})

.controller('CartCtrl', function($scope) {

})

.controller('RestaurantDetailCtrl', function($scope, $stateParams, Restaurant) {
  $scope.Restaurant = Restaurant.get($stateParams.restaurantId);
})

.controller('AccountCtrl', function($scope) {
});
