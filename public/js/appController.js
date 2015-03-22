toDoList = angular.module('toDoList',[]);
toDoList.controller('ToDoController', ['$scope','$http', function($scope, $http){
  

  $http.get('/todolist').success(function(response){
    console.log(response);
    $scope.todolist = response;
  });

  $scope.addTodo = function(){
    $http.post('/todolist', $scope.todo).success(function(response){
      console.log(response); 
      $scope.todolist.push(response); 
      $scope.todo = "";
    });
  };
}]);

