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
        // beim View auf Selektion/Deselektion von ToDos lauschen
        this.view.selectTodoSubject.register(this.selectTodo.bind(this));
        this.view.unselectTodoSubject.register(this.unselectTodo.bind(this));
    },

    addTodo: function (args) {
        // Model aktualisieren
        this.model.addTodo(args.todo);
    },

    selectTodo: function (args) {
        this.model.selectTodo(args.todoIndex);
    },

    unselectTodo: function (args) {
        this.model.unselectTodo(args.todoIndex);
    }
};