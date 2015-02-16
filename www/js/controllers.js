angular.module('starter.controllers', [])

    .controller('RestaurantsCtrl', function($scope, Restaurant) {
        $scope.Restaurants = Restaurant.all();
    })

    .controller('CartCtrl', function($scope,Cart) {
        $scope.cart =  Cart.getCart();
    })

    .controller('RestaurantDetailCtrl', function($scope, $stateParams, Restaurant,$location) {
        $scope.Restaurant = Restaurant.get($stateParams.restaurantId);
        $scope.goToItem = function(restaurantID,dishesID,itemID){
            console.log(itemID)
            $location.path("/tab/restaurant/"+restaurantID+"/"+dishesID+"/"+itemID)
        }

    })

    .controller('ItemDetailCtrl', function($scope,$stateParams,Restaurant,Cart) {
        console.log($stateParams.restaurantID+'----'+$stateParams.itemID)
        $scope.menuDeatil = Restaurant.getMenuDetail($stateParams.restaurantID,$stateParams.dishesID,$stateParams.itemID);


        $scope.addToCart = function(itemQuantID){
            var itemOrder = {resturantID:$stateParams.restaurantID,dishID:$stateParams.dishesID,itemID:$stateParams.itemID,quantityID:itemQuantID}
            var result =  Cart.addToCart(itemOrder)
            console.log(result)
        }
    })

    .controller('AccountCtrl', function($scope) {
    });
