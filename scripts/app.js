var dcollioniApp = angular.module('dcollioniApp', ['ngRoute']);

dcollioniApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/repos', {
            templateUrl: 'pages/home.html',
            controller: 'reposController'
        })

        .when('/about', {
            templateUrl: 'pages/home.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: 'pages/home.html',
            controller: 'contactController'
        })

        .otherwise({
            redirectTo: '/'
        });

    //$locationProvider.html5Mode(true);
});

dcollioniApp.controller('mainController', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

dcollioniApp.controller('reposController', function ($scope) {
    $scope.message = 'My repos here...';
});

dcollioniApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

dcollioniApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});