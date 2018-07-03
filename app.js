var app = angular.module("myApp" , ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/" , {
        templateUrl : "product.html",
        controller : "productPage"
    })
    .when("/productDetail/:ID" , {
        templateUrl : "productDetail.html",
        controller : "productDetail"
    })
    .otherwise({
        templateUrl : "error.html"
    })
});

app.factory('sharedList',function() {
    var productData = [
        {
            id : 1,
            name : "Apple iWatch",
            price : 15000,
            image : "watch.png",
            description : "This Watch is Awesoem Lorem Ipsum Doller Sit Amet Loemn Illons set des"
        },
        {
            id : 2,
            name : "Black Shoes",
            price : 1500,
            image : "boot.png",
            description : "This Shoes is Awesoem Lorem Ipsum Doller Sit Amet Loemn Illons set des"
        },
        {
            id : 3,
            name : "Electric Mixture",
            price : 5000,
            image : "mixture.png",
            description : "This mixture is Awesoem Lorem Ipsum Doller Sit Amet Loemn Illons set des"
        },
        {
            id : 4,
            name : "iPhone X",
            price : 56000,
            image : "phone.png",
            description : "This iPhone X is Awesoem Lorem Ipsum Doller Sit Amet Loemn Illons set des"
        }
    ]

    return{
        getData : productData
    }
  });

app.controller("productPage" , function($scope ,sharedList){
    $scope.data = sharedList.getData;
});

app.controller("productDetail" , function($scope,$routeParams,sharedList){ 
        $scope.particularProduct = sharedList.getData[$routeParams.ID - 1];
        console.log(sharedList.getData[$routeParams.ID]);
});
