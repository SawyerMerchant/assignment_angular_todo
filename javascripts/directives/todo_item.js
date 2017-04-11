console.log("loaded");
toDo.directive('todoItem', function() {
  console.log("fired!");
  return {
    templateUrl: 'javascripts/directives/todo_item.html',
    // template: 'testing!',
    restrict: 'AE',
    scope: {
      item: '=',
      deleteTask: '&',
    }
  };
});
