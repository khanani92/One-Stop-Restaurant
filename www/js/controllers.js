angular.module('starter.controllers', [])

.controller('RestaurantsCtrl', function($scope, Restaurant) {
        $scope.Restaurants = Restaurant.all();
})

.controller('CartCtrl', function($scope) {

})

.controller('RestaurantDetailCtrl', function($scope, $stateParams, Restaurant,$location) {
  $scope.Restaurant = Restaurant.get($stateParams.restaurantId);
        $scope.goToItem = function(restaurantID,itemID){
            console.log(itemID)
            $location.path("/tab/restaurant/"+restaurantID+"/"+itemID)
        }

})

.controller('ItemDetailCtrl', function($scope,$stateParams,Restaurant) {
        console.log($stateParams.restaurantID+'----'+$stateParams.itemID)
        $scope.menuDeatil = Restaurant.getMenuDetail($stateParams.restaurantID,$stateParams.itemID);
        //console.log($scope.menuDeatil)
})

.controller('AccountCtrl', function($scope) {
});
