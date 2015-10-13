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
        $scope.selectedCat = null;
    };

    $scope.presentNote = function(index) {
        $scope.selectedNote = $scope.selectedCat.notes[index];
    };

    $scope.callNewCatPopup = function() {
        $('.new_cat_popup').addClass('display_in');
    };

    $scope.createNewCat = function() {
        $scope.categories.push(
            {
                description: $scope.newCat,
                notes: []
            }
        );

        $('.new_cat_popup').removeClass('display_in');
    }

    $scope.createNewNote = function() {

        if ($scope.selectedCat) {    
            $scope.selectedCat.notes.push(
                {
                    title: '',
                    content: ''
                });
            $scope.selectedNote = $scope.selectedCat.notes[$scope.selectedCat.notes.length - 1];    
            $('.noteTitle').focus();
        };

    };

    $scope.deleteNote = function(index) {
      $scope.selectedCat.notes.splice(index, 1);
      console.log('msg')

    };



});


