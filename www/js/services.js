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


        /* var restaurant = [
         { id: 0, name: 'Optp',description:'Pizza, Fast food' ,menu:[
         {id:0,name:'Pizza',itemList:[
         {id:0,name:'Chicken Pizza',quantity:[
         {id:0,description:'Pan',price:'250'},
         {id:1,description:'Regular',price:'550'},
         {id:2,description:'Large',price:'750'}
         ],description:''},
         {id:1,name:'Beef Pizza',quantity:[
         {id:0,description:'Pan',price:'300'},
         {id:1,description:'Regular',price:'550'},
         {id:2,description:'Large',price:'950'}
         ],description:''},
         {id:2,name:'Pasta Pizza',quantity:[
         {id:0,description:'Pan',price:'350'},
         {id:1,description:'Regular',price:'700'},
         {id:2,description:'Large',price:'1050'}
         ],description:''}
         ]},
         {id:1,name:'Burger',itemList:[
         {id:0,name:'Zinger Burger',quantity:[
         {id:0,description:'Junior',price:'180'},
         {id:1,description:'Regular',price:'240'}
         ],description:''},
         {id:1,name:'Beef Burger',quantity:[
         {id:0,description:'Junior',price:'120'},
         {id:1,description:'Regular',price:'140'}
         ],description:''},
         {id:2,name:'Chicken Burger',quantity:[
         {id:0,description:'Junior',price:'100'},
         {id:1,description:'Regular',price:'120'}
         ],description:''}
         ]}],picName:'optp'},
         { id: 1, name: 'Cafe zero',description:'Fast Food, BBQ, Italian  food' ,menu:[
         {id:0,name:'Burger',itemList:[
         {id:0,name:'Zinger Burger',quantity:[
         {id:0,description:'Junior',price:'160'},
         {id:1,description:'Regular',price:'230'}
         ],description:''},
         {id:1,name:'Beef Burger',quantity:[
         {id:0,description:'Junior',price:'130'},
         {id:1,description:'Regular',price:'150'}
         ],description:''},
         {id:2,name:'Chicken Burger',quantity:[
         {id:0,description:'Junior',price:'100'},
         {id:1,description:'Regular',price:'120'}
         ],description:''}],description:''},
         {id:1,name:'Broast',itemList:[
         {id:0,name:'Plain Broast',quantity:[
         {id:0,description:'Quarter',price:'150'},
         {id:1,description:'Half',price:'280'},
         {id:2,description:'Full',price:'550'}
         ],description:''},
         {id:1,name:'Spicy Broast',quantity:[
         {id:0,description:'Quarter',price:'180'},
         {id:1,description:'Half',price:'300'},
         {id:2,description:'Full',price:'580'}
         ],description:''},
         {id:2,name:'Cheese Broast',quantity:[
         {id:0,description:'Quarter',price:'220'},
         {id:1,description:'Half',price:'320'},
         {id:2,description:'Full',price:'620'}
         ],description:''},
         ]},
         {id:1,name:'Chicken Tikka',itemList:[
         {id:0,name:'Plain Tikka',quantity:[
         {id:0,description:'Chest Piece',price:'100'},
         {id:1,description:'Leg Piece',price:'90'}

         ],description:''},
         {id:1,name:'Maali Tikka',quantity:[
         {id:0,description:'Chest Piece',price:'130'},
         {id:1,description:'Leg Piece',price:'120'}

         ],description:''},
         {id:2,name:'Spicy Tikka',quantity:[
         {id:0,description:'Chest Piece',price:'110'},
         {id:1,description:'Leg Piece',price:'100'}

         ],description:''},
         ]},
         {id:2,name:'Pasta',itemList:[
         {id:0,name:'Chicken Pasta',quantity:[
         {id:0,description:'Half',price:'450'},
         {id:1,description:'Full',price:'850'}
         ],description:''}

         ]}],picName:'cafeZero'},
         { id: 2, name: 'Roll corner',description:'Pizza, Desi food, BBQ' ,menu:[
         {id:0,name:'Pizza',itemList:[
         {id:0,name:'Chicken Pizza',quantity:[
         {id:0,description:'Pan',price:'300'},
         {id:1,description:'Regular',price:'600'},
         {id:2,description:'Large',price:'800'}
         ],description:''},
         {id:1,name:'Beef Pizza',quantity:[
         {id:0,description:'Pan',price:'350'},
         {id:1,description:'Regular',price:'650'},
         {id:2,description:'Large',price:'1050'}
         ],description:''},
         {id:2,name:'Pasta Pizza',quantity:[
         {id:0,description:'Pan',price:'400'},
         {id:1,description:'Regular',price:'750'},
         {id:2,description:'Large',price:'1100'}
         ],description:''}
         ]},
         {id:1,name:'Chicken Tikka',itemList:[
         {id:0,name:'Plain Tikka',quantity:[
         {id:0,description:'Chest Piece',price:'120'},
         {id:1,description:'Leg Piece',price:'100'}

         ],description:''},
         {id:1,name:'Maali Tikka',quantity:[
         {id:0,description:'Chest Piece',price:'150'},
         {id:1,description:'Leg Piece',price:'130'}

         ],description:''},
         {id:2,name:'Spicy Tikka',quantity:[
         {id:0,description:'Chest Piece',price:'170'},
         {id:1,description:'Leg Piece',price:'150'}

         ],description:''},
         ]}
         ],picName:'rollCorner'},
         { id: 3, name: 'Chester ',description:'Pizza, Pasta' ,menu:[
         {id:0,name:'Pizza',itemList:[
         {id:0,name:'Chicken Pizza',quantity:[
         {id:0,description:'Pan',price:'250'},
         {id:1,description:'Regular',price:'550'},
         {id:2,description:'Large',price:'750'}
         ],description:''},
         {id:1,name:'Beef Pizza',quantity:[
         {id:0,description:'Pan',price:'300'},
         {id:1,description:'Regular',price:'550'},
         {id:2,description:'Large',price:'950'}
         ],description:''},
         {id:2,name:'Pasta Pizza',quantity:[
         {id:0,description:'Pan',price:'350'},
         {id:1,description:'Regular',price:'700'},
         {id:2,description:'Large',price:'1050'}
         ],description:''}
         ]},
         {id:1,name:'Pasta',itemList:[
         {id:0,name:'Chicken Pasta',quantity:[
         {id:0,description:'Half',price:'500'},
         {id:1,description:'Full',price:'950'}
         ],description:''}

         ]}
         ],picName:'chester'}];*/

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


