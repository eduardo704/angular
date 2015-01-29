/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app= angular.module("store", []);


app.controller('StoreController', function(){
    this.products=gem;
});
 
app.directive("topo", function() {
      return {
        restrict: 'E',
        templateUrl: "resources/topo.html"
      };
    });

app.directive("mapa", function() {
      return {
        restrict: 'E',
        templateUrl: "resources/mapa.html"
      };
    });
    
app.directive("esquerda", function() {
      return {
        restrict: 'E',
        templateUrl: "resources/esquerda.html"
      };
    });


var gem= [{
    name: "teste",
    price: 2.95,
    description: 'é um bom teste',    
    canPurchase: true
},
{
    name: "outra gem",
    price: 5.95,
    description: 'essa é mais cara',    
    canPurchase: true
    
}
]