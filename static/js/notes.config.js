angular.module('NotesApp').config(
        function config($locationProvider, $routeProvider) {
           $locationProvider.hashPrefix('!');

           $routeProvider.when('/add', {
              templateUrl: '/tmplts/add.html'
           }).when('/update/:noteId', {
              templateUrl: '/tmplts/update.html'
           }).otherwise({
              templateUrl: '/tmplts/home.html'
           });
        }
).config(
        function (RestangularProvider) {
           RestangularProvider.setBaseUrl('http://private-9aad-note10.apiary-mock.com/');
        });
