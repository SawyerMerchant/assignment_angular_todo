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
        $window.alert("To doing");
        // var newToDo = {
        //   text: newOne.text,
        //   dueDate: newOne.dueDate,
        //   completed: false
        // };
        // $scope.items.push(newToDo);
        // return true;
      };
    }
]);
