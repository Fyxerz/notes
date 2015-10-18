'use script';

var app = angular.module('notesApp', []);

app.controller('notesController', function($scope, $http) {

    $scope.mainCategory = {
        "catName": "Main",

        "categories": [],

        "notes": []
    };

    $scope.selectedCategory = $scope.mainCategory;
    $scope.categoryTree = [$scope.mainCategory];

    function startStorage() {
        if (localStorage.main == null) {
            console.log('msg')
            localStorage.main = $scope.categoryTree[0]
        }
        else {
            console.log('Storage already initiated.');
        }
    };

    startStorage();

    setInterval(function() {
        localStorage.setItem('main', JSON.stringify($scope.categoryTree[0])); 
        // console.log(JSON.parse(localStorage.main));
    }, 1000);


    $scope.selectCat = function(index) {
        $scope.selectedCategory = $scope.selectedCategory.categories[index];
        $scope.categoryTree.push($scope.selectedCategory);
    };

    $scope.backCat = function() {
        if ($scope.categoryTree.length > 1) {
            $scope.categoryTree.pop();
            $scope.selectedCategory = $scope.categoryTree[$scope.categoryTree.length - 1];
        }
    };

    $scope.presentNote = function(index) {
        $scope.selectedNote = $scope.selectedCategory.notes[index];
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
        $('.newCatName').val('');
        $scope.newCat = null;
        console.log($scope.categoryTree[0]);
    };


    $scope.deleteCat = function(index) {
        $scope.selectedCategory.categories.splice(index, 1);
    };

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


