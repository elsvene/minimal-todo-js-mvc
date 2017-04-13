var TodoController = function (model, view) {
    // Controller kennt Model und View
    this.model = model;
    this.view = view;
    this.init();
};

TodoController.prototype = {

    init: function () {
        // beim View auf neue hinzugefuegte ToDos lauschen
        this.view.addTodoSubject.register(this.addTodo.bind(this));
    },

    addTodo: function (args) {
        // Model aktualisieren
        this.model.addTodo(args.todo);
    }

};