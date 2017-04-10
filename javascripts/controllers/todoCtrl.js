toDo.controller('toDoCtrl',
  ['$scope', '$window',
    function($scope, $window){
      $scope.items = [
        {
          text: "Get groceries from the store",
          dueDate: new Date(),
          completed: false
        },
        {
          text: "Get tools from the factory",
          dueDate: new Date(),
          completed: false
        }
      ];

      $scope.createToDo = function(){
        // $window.alert("To doing");
        var newToDo = {
          text: $scope.item.text,
          dueDate: $scope.item.dueDate,
          completed: false
        };
        $scope.items.push(newToDo);
        $scope.item.text = "";
        return true;
      };

      $scope.deleteTask = function(task){
        // $window.alert("Delete " + task);
        $scope.items.splice(task, 1);
      };

      $scope.clearCompleted = function(){
        var filteredTasks = $scope.items.filter(function(task) {
          return !task.completed;
        });

        angular.copy(filteredTasks, $scope.items);
      };
    }
]);
