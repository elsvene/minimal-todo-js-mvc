function TodoModel() {
    this.todos = [];

    this.addTodoSubject = new Observable(this);
};

TodoModel.prototype = {

    // Neues ToDo hinzufuegen
    addTodo: function(todo) {
        this.todos.push({
            name: todo
        });

        // lauschende Observer informieren
        this.addTodoSubject.notify();
    },

    // Lesen der aktuellen ToDos
    getTodos: function() {
        return this.todos;
    }

};