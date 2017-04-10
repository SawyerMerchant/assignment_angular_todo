toDo.controller('toDoCtrl',
  ['$scope', function($scope) {
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

    // $scope.item = {
    //   text: "Get groceries from the store",
    //   dueDate: new Date(),
    //   completed: false
    // };
  }
]);
