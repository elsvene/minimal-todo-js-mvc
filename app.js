 $(document).ready(function () {
     const model = new TodoModel(),
         view = new TodoView(model),
         controller = new TodoController(model, view);
 });