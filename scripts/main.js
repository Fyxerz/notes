'use script';

var app = angular.module('notesApp', []);

app.controller('notesController', function($scope, $http) {

    $scope.selectedCategory;
    $scope.categoryTree = [];

    $http({
      method: 'GET',
      url: '../scripts/cat.json'
    }).success(function(response) {
        $scope.selectedCategory = response;
        $scope.categoryTree.push(response);
        console.log($scope.categoryTree);
      }, function errorCallback(response) {
        console.log('msg');
      });


    $scope.selectCat = function(index) {
        $('.sidebar').addClass('overlay');
        $scope.selectedCategory = $scope.selectedCategory.categories[index];
        console.log($scope.selectedCategory);
        $scope.categoryTree.push($scope.selectedCategory);
        console.log($scope.categoryTree);
    };

    $scope.backCat = function() {
        if ($scope.categoryTree.length > 1) {
            $scope.categoryTree.pop();
            $scope.selectedCategory = $scope.categoryTree[$scope.categoryTree.length - 1];
        }
    };

    $scope.presentNote = function(index) {
        $scope.selectedNote = $scope.selectedCategory.notes[index];
        console.log($scope.selectedNote);
    };

    $scope.callNewCatPopup = function() {
        $('.newCatPopup').addClass('display_in');
    };

    $scope.createNewCat = function() {
        $scope.selectedCategory.categories.push(
            {
                catName: $scope.newCat,
                categories: [],
                notes: []
            }
        );
        $('.newCatName').val("");
        $scope.newCat = null;
    }


    $scope.deleteCat = function(index) {
        $scope.selectedCategory.categories.splice(index, 1);
    }

    $scope.createNewNote = function() {
            $scope.selectedCategory.notes.push(
                {
                    title: '',
                    content: ''
                });
            $scope.selectedNote = $scope.selectedCategory.notes[$scope.selectedCategory.notes.length - 1];    
            $('.noteTitle').focus();

    };

    $scope.deleteNote = function(index) {
      $scope.selectedCategory.notes.splice(index, 1);
      console.log('msg')

    };



});


