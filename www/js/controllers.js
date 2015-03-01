angular.module('starter.controllers', [])

    .controller('RestaurantsCtrl', function($scope, Restaurant,User) {
        $scope.user =User.getUser();
        $scope.Restaurants = Restaurant.all();
        //Restaurant.saveRestaurant();
    })

    .controller('CartCtrl', function($scope,Cart) {
        $scope.cart =  Cart.getCart();
    })

    .controller('RestaurantDetailCtrl', function($scope, $stateParams, Restaurant,$location,User) {
        $scope.user =User.getUser();
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

    .controller('AccountCtrl', function($scope,User,$ionicPopup,$location) {
        $scope.user =User.getUser();
        $scope.login = function () {
            User.login($scope.user.email, $scope.user.password, function(res) {
                if (res.uid) {
                    $scope.user.email =''
                    $scope.user.password =''
                    $ionicPopup.alert({
                        title: 'User Login!',
                        template: 'Login Successful !! You Can Place Your order Now '
                    });
                    $scope.user = res;
                    localStorage.setItem('userInfo',JSON.stringify(res))
                    $location.path("/tab/restaurants")
                    //console.log(res)
                } else {
                    $ionicPopup.alert({
                        title: 'Login error!',
                        template: res.message
                    });
                }
            });
        };

        $scope.register = function () {
            User.register($scope.user.email, $scope.user.password, function(res) {
                if (res === null) {
                    $scope.user.email =''
                    $scope.user.password =''
                    $ionicPopup.alert({
                        title: 'User Registered!',
                        template: 'Please Login'
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Register error!',
                        template: res.message
                    });

                }
            });
        };


        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        $scope.logout= function(){
            $scope.user = User.logout()

        }

    });
