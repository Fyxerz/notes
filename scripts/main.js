'use script';

var app = angular.module('notesApp', []);

app.controller('notesController', function($scope) {

    $scope.menuItems;

    $scope.categories = [
        {
            description: 'Work',

            notes: [
                {
                    title: 'This is a title for a note on work',
                    content: 'This is some content'
                },
                {
                    title: 'Chris is stoops',
                    content: 'I\'m the scatman!'
                }
            ]
        },
        {
            description: 'Uni',

            notes: [
                {
                    title: 'This is a title for a note on uni',
                    content: 'This is some more content about uni'
                }
            ]
        }
    ];


    $scope.selectCat = function(index) {
        $scope.selectedCat = $scope.categories[index].notes;
        console.log(index);
    };

    $scope.switchClass = function(index) {
        $('.cat_nav').toggleClass('overlay_in');
    }

    $scope.presentNote = function(index) {
        $scope.selectedNote = $scope.selectedCat[index];
        console.log($scope.selectedCat[index]);
    };

});
