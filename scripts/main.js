'use script';

var app = angular.module('notesApp', []);

app.controller('notesController', function($scope, $http) {

    $scope.selectedNote = {};
    $scope.categories = {};

    $http({
      method: 'GET',
      url: '../scripts/cat.json'
    }).success(function(response) {
        $scope.categories = response;
        $scope.selectedCat = $scope.categories[0];
      }, function errorCallback(response) {
        console.log('msg');
      });


    $scope.selectCat = function(index) {
        $scope.selectedCat = $scope.categories[index];
    };

    $scope.presentCat = function() {
        $('.cat_nav').addClass('overlay_in');
    };

    $scope.hideCat = function() {
        $('.cat_nav').removeClass('overlay_in');
    };

    $scope.presentNote = function(index) {
        $scope.selectedNote = $scope.selectedCat.notes[index];
    };


    $scope.createNewNote = function() {

        $scope.selectedCat.notes.push(
            {
                title: '',
                content: ''
            });
        $scope.selectedNote = $scope.selectedCat.notes[$scope.selectedCat.notes.length - 1];
        console.log('SelectedCat: ');
        console.log($scope.selectedCat.notes[$scope.selectedCat.notes.length - 1]);
        console.log('UniCat: ');
        console.log($scope.categories[0].notes);
    };
});


