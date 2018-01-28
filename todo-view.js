function TodoView(model) {
    // View kennt Model
    this.model = model;
    this.addTodoSubject = new Observable(this);
    this.init();
};

TodoView.prototype = {

    init: function () {
        // Elemente aus dem DOM anhand ihrer CSS-Klasse selektieren
        this.$container = $('.main-container');
        this.$addTodoButton = this.$container.find('.add-todo-button');
        this.$todoTextBox = this.$container.find('.todo-textbox');
        this.$todoContainer = this.$container.find('.todo-container');

        // Event-Handler am Button registrieren
        this.$addTodoButton.click(() => this.addTodoButtonClicked());

        // beim Model auf neue hinzugefuegte ToDos lauschen
        this.model.addTodoSubject.register(() => this.refreshTodoList());

        return this;
    },

    addTodoButtonClicked: function () {
        this.addTodoSubject.notify({
            todo: this.$todoTextBox.val()
        });
        this.$todoTextBox.val('');
    },

    refreshTodoList: function () {
        // Liste der ToDos vom Model lesen
        const todos = this.model.getTodos();
        
        // HTML erzeugen und in das "todo-container"-Element einhaengen (DOM-Manipulation)
        const $todoContainer = this.$todoContainer;

        $todoContainer.html('');

        let index = 0;
        for (let todo in todos) {
            $todoContainer.append("<div><label><input type='checkbox' class='todo' data-index='" + index + "' data-task-selected='false'>" + todos[todo].name + "</label></div>");
            index++;
        }
    }

};