'use script';

var app = angular.module('notesApp', []);

app.controller('notesController', function($scope) {
    $scope.categories = [
        {
            description: 'Work',

            notes: [
                {
                    title: 'This is a title',
                    content: 'This is some content'
                }
            ]
        },
        {
            description: 'Uni',

            notes: [
                {
                    title: 'This is a title',
                    content: 'This is some content'
                }
            ]
        }
    ];
});
