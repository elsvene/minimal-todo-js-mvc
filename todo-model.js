 var TodoModel = function () {
     this.todos = [ ];
     this.selectedTodos = [];
     
     this.addTodoSubject = new Observable(this);
 };

 TodoModel.prototype = {

     addTodo: function (task) {
         // neues ToDo hinzufuegen
         this.todos.push({
             name: task
         });

         // lauschende Observer informieren
         this.addTodoSubject.notify();
     },

     selectTodo: function (todoIndex) {
         this.selectedTodos.push(todoIndex);
         console.log(todoIndex + " selected");
     },

     unselectTodo: function (todoIndex) {
         this.selectedTodos.splice(todoIndex, 1);
         console.log(todoIndex + " unselected");
     },

     // Lesen der aktuellen ToDos
     getTodos: function () {
         return this.todos;
     }

 };