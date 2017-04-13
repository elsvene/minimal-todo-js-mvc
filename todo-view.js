var TodoView = function (model) {
    // View kennt Model
    this.model = model;
    this.addTodoSubject = new Observable(this);
    this.selectTodoSubject = new Observable(this);
    this.unselectTodoSubject = new Observable(this);
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
        this.$addTodoButton.click(this.addTodoButtonClicked.bind(this));
        // Event-Handler an ToDo-Checkboxen registrieren
        this.$container.on('click', '.todo', this.selectOrUnselectTodo.bind(this));

        // beim Model auf neue hinzugefuegte ToDos lauschen
        this.model.addTodoSubject.register(this.refreshTodoList.bind(this));

        return this;
    },

    addTodoButtonClicked: function () {
        this.addTodoSubject.notify({
            todo: this.$todoTextBox.val()
        });
        this.$todoTextBox.val('');
    },

    selectOrUnselectTodo: function () {
        var todoIndex = $(event.target).attr("data-index");

        if ($(event.target).attr('data-task-selected') == 'false') {
            $(event.target).attr('data-task-selected', true);
            this.selectTodoSubject.notify({
                todoIndex: todoIndex
            });
        } else {
            $(event.target).attr('data-task-selected', false);
            this.unselectTodoSubject.notify({
                todoIndex: todoIndex
            });
        }
    },

    refreshTodoList: function () {
        // Liste der ToDos vom Model lesen
        var todos = this.model.getTodos();
        
        // HTML erzeugen in das "todo-container"-Element einhaengen (DOM-Manipulation)
        var html = "";
        var $todoContainer = this.$todoContainer;

        $todoContainer.html('');

        var index = 0;
        for (var todo in todos) {
            $todoContainer.append(html + "<div><label><input type='checkbox' class='todo' data-index='" + index + "' data-task-selected='false'>" + todos[todo].name + "</label></div>");
            index++;
        }
    }

};