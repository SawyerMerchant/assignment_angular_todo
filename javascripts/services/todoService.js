toDo.factory('toDoService', function() {
  var items = [
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

  var getTasks = function() {
    return items;
  };

  var createToDo = function(item) {
    // $window.alert("To doing");
    var newToDo = {
      text: item.text,
      dueDate: item.dueDate,
      completed: false
    };
    items.push(newToDo);
    // can this go here?
    // item.text = "";
    return true;
  };

  var deleteTask = function(task) {
    items.splice(task, 1);
  };

  var clearCompleted = function() {
    var filteredItems = items.filter(function(item) {
      return !item.completed;
    });

    angular.copy(filteredItems, items);
  };

  return {
    createToDo: createToDo,
    getTasks: getTasks,
    deleteTask: deleteTask,
    clearCompleted: clearCompleted,
  };
});
