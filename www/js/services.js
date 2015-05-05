angular.module('starter.services', ['firebase'])

/**
 * A simple example service that returns some data.
 */
    .factory('User',["$timeout","$firebase", function($timeout,$firebase ) {
        var ref = new Firebase("https://onestoprestaurant.firebaseio.com/");
        var auth = $firebase(ref);
        var user = {};

        return {
            login: function(email, password, callback) {
                ref.authWithPassword({
                    email: email,
                    password: password,
                    rememberMe: false
                },function(err,res) {
                    user = res;
                    if (callback) {
                        $timeout(function() {
                            callback(res);
                        });
                    }
                }, function(err) {
                    callback(err);
                });
            },
            register: function(email, password, callback) {
                ref.createUser({email:email, password:password},function(res) {
                    user = res;
                    if (callback) {
                        callback(res);
                    }
                })
                //    function(err) {
                //  callback(err);
                //});
            },
            getUser: function() {
                if(user.uid){
                    return user;
                }else{
                    var userTemp=JSON.parse(localStorage.getItem('userInfo'))
                    if((userTemp)&&(userTemp.uid)){
                        user =userTemp
                        return user
                    }else{
                        return {}
                    }
                }

            },
            logout: function() {
                ref.unauth();
                user = {};
                return user;
            },
            changeEmail: function(email,oldPassword,newPassword,callback){
                ref.changePassword({
                    email       : email,
                    oldPassword : oldPassword,
                    newPassword : newPassword
                }, function(error) {
                    if (error === null) {
                        console.log("Email changed successfully");
                    } else {
                        console.log("Error changing email:", error);
                    }
                });
            }


        }
    }])

    .factory('Restaurant', function($firebase,$rootScope) {
        //
        var CON = new Firebase("https://onestoprestaurant.firebaseio.com/");
        var resRef = CON.child('restuarants');
        $rootScope.restaurants = $firebase(resRef).$asArray();
        console.log($rootScope.restaurants)

        // Might use a resource here that returns a JSON array

        // Some fake testing data

        return {
            all: function() {
             return $rootScope.restaurants;
            },
            get: function(restaurantId) {
                // Simple index lookup
                var tempRest= $rootScope.restaurants.filter(function(resturant){
                    return  resturant.$id ==  restaurantId
                })
                if((tempRest)&&(tempRest.length > 0)){
                    return tempRest[0];
                }else{
                    return {msg:' No resturant Found '}
                }

            },
            getMenuDetail:function(restaurantID,dishID,itemID){
                var tempRest= $rootScope.restaurants.filter(function(resturant){
                    return  resturant.$id ==  restaurantID
                })
                if((tempRest)&&(tempRest.length > 0)){
                    var dishes =  tempRest[0].menu;
                    var tempDish, tempItem;
                    for (var dish in dishes) {
                        if(dish == dishID){
                            tempDish =   dishes[dish]
                        }
                    }
                    if((tempDish)){
                        for (var item in tempDish.itemList) {
                            if(item == itemID){
                                tempItem = tempDish.itemList[item]
                                return tempItem;
                            }
                        }
                    }else{
                        return {msg:' No Dish Found '}
                    }

                }else{

                }


                //return $rootScope.restaurants[restaurantID].menu[dishesID].itemList[itemID]
            },
            saveRestaurant:function(){

            }
        }
    })

    .factory('Cart',["Restaurant", function(Restaurant) {
        var cart = [];

        return {
            addToCart:function(productInfo){

                var itemCheck = cart.filter(function(item){
                    return (item.resturantID == productInfo.resturantID)&&(item.dishID == productInfo.dishID)&&(item.itemID == productInfo.itemID)&&(item.quantityID == productInfo.quantityID)
                })

                console.log(itemCheck)
                if((itemCheck) &&(itemCheck.length > 0)){
                    itemCheck[0].quantity++;
                }else{
                    productInfo.quantity = 1
                    cart.push(productInfo);
                }
                return cart
            },
            deleteFromCart:function(cart,productInfo){
                //console.log(productInfo)
                cart.splice(productInfo, 1)  ;
                return cart;
            },
            getCart:function(){
                var currentCart = []
                var tempRest = Restaurant.all()
                cart.forEach(function(product){
                    var orderTemp = {}
                    tempRest.filter(function(rest){
                        if(product.resturantID == rest.$id){
                            orderTemp.resturantName = rest.name;
                            for (var dish in rest.menu) {
                                if(dish == product.dishID){
                                    orderTemp.dishName  =  rest.menu[dish].name;
                                    // return orderTemp;
                                    for (var item in rest.menu[dish].itemList) {
                                        if(item == product.itemID){
                                            orderTemp.itemName  =  rest.menu[dish].itemList[item].name;
                                            for (var quantity in rest.menu[dish].itemList[item].quantity) {
                                                if(quantity == product.quantityID){
                                                    orderTemp.quantityName = rest.menu[dish].itemList[item].quantity[quantity].description;
                                                    orderTemp.quantityPrice = rest.menu[dish].itemList[item].quantity[quantity].price;
                                                    orderTemp.quantity = product.quantity
                                                    currentCart.push(orderTemp)
                                                }
                                            }
                                            // return orderTemp;

                                        }
                                    }

                                }
                            }

                        }
                    })
                })
                //console.log(currentCart)
                return currentCart
            },
            saveCart:function(){
                cart = []
                return cart
            }

        }
    }])


