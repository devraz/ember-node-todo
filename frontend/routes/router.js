Todos.Router.map(function() {
	// when application URL matches '/' then render 'todos' template
	this.resource('todos', { path: '/' }, function() {
		// also transition into the todos.index route and fill the outlet in the todos/index template
		// additional child routes
		this.route('active');
		this.route('completed');
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

Todos.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
});

Todos.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},
	// transitioning to new route changes template rendered into the parent outlet
	// so we call render to reuse the todos/index template
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  // transitioning to new route changes template rendered into the parent outlet
	// so we call render to reuse the todos/index template
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

