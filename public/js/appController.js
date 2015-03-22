toDoList = angular.module('toDoList',[]);
toDoList.controller('ToDoController', ['$scope','$http', function($scope, $http){
  $http.get('/todolist').success(function(response){
    $scope.todolist = response;
  });
}]);

