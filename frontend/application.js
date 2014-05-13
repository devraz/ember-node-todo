window.Todos = Ember.Application.create();


Todos.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id'
});


Todos.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api/1'
});
