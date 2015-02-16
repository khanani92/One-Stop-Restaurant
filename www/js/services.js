angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Restaurant', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var restaurant = [
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
            ],picName:'chester'}];

        return {
            all: function() {
                return restaurant;
            },
            get: function(restaurantId) {
                // Simple index lookup
                return restaurant[restaurantId];
            },
            getMenuDetail:function(restaurantID,dishesID,itemID){
                return restaurant[restaurantID].menu[dishesID].itemList[itemID]
            }
        }
    })

    .factory('Cart', function() {
        var cart = [];

        return {
            addToCart:function(productInfo){
                cart = productInfo;
                return cart
            },
            deleteFromCart:function(productInfo){
                console.log(productInfo)
            },
            getCart:function(){
                return cart
            }

        }
    })