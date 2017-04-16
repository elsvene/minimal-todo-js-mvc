 var TodoModel = function () {
     this.todos = [ ];
     
     this.addTodoSubject = new Observable(this);
 };

 TodoModel.prototype = {

     addTodo: function (todo) {
         // neues ToDo hinzufuegen
         this.todos.push({
             name: todo
         });

         // lauschende Observer informieren
         this.addTodoSubject.notify();
     },

     // Lesen der aktuellen ToDos
     getTodos: function () {
         return this.todos;
     }

 };