angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Restaurant', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var restaurant = [
    { id: 0, name: 'Scruff McGruff',description:'Pizza, Fast food' },
    { id: 1, name: 'G.I. Joe' ,description:'Fast Food, BBQ, Italian  food '},
    { id: 2, name: 'Miss Frizzle' ,description:'Desi food, BBQ'},
    { id: 3, name: 'Ash Ketchum',description:'Pizza, Sandwiches ' }
  ];

  return {
    all: function() {
      return restaurant;
    },
    get: function(restaurantId) {
      // Simple index lookup
      return restaurant[restaurantId];
    }
  }
});
