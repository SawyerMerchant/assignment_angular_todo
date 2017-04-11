toDo.controller('toDoCtrl',
  ['$scope', '$window', 'toDoService',
    function($scope, $window, toDoService){
      $scope.hideCompleted = false;
      $scope.items = toDoService.getTasks();

      $scope.createToDo = function(){
        toDoService.createToDo($scope.item);
        $scope.item.text = "";
      };

      $scope.deleteTask = function(task){
        toDoService.deleteTask(task);
      };

      $scope.clearCompleted = function(){
        toDoService.clearCompleted();
      };

      // should this be a service?
      $scope.toggleCompleted = function(){
        $scope.hideCompleted = !$scope.hideCompleted;
      };

    }
]);
