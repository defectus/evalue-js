angular.module('NotesApp', ['ngRoute', 'restangular']).factory('NotesService',
        function (Restangular) {
           var notes = Restangular.all('notes');

           var factory = {
              getAllNotes: function (container) {
                 return notes.getList().then(function (notes) {
                    container.length = 0;
                    container.push.apply(container, notes);
                 });
              },
              getNote    : function (id) {
                 return notes.one(id).get();
              },
              insertNote : function (title) {
                 return notes.post({title: title});
              },
              updateNote : function (id, title) {
                 var note   = notes.one(id);
                 note.title = title;
                 return note.put();
              },
              deleteNote : function (id) {
                 return notes.one(id).remove();
              }
           };
           return factory;
        }).controller('HomeController',
        function ($scope, $location, NotesService) {
           $scope.notes = [];
           NotesService.getAllNotes($scope.notes);

           $scope.deleteNote = function (id) {
              NotesService.deleteNote(String(id)).then(function () {
                 NotesService.getAllNotes($scope.notes);
              });
           };
        }).controller('AddNoteController',
        function ($scope, $location, NotesService) {
           $scope.note = {};

           $scope.addNewNote = function () {
              NotesService.insertNote($scope.note).then(function () {
                 $location.path('');
              });
           };
        }).controller('UpdateNoteController',
        function ($scope, $routeParams, $location, NotesService) {
           $scope.note = {};

           NotesService.getNote($routeParams.noteId).then(function (note) {
              $scope.note = note;
           });

           $scope.updateNote = function () {
              NotesService.updateNote(String($scope.note.id), $scope.note.title).then(function () {
                 $location.path('');
              });
           };
        });
