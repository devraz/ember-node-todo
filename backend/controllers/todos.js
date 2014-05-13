var Todo = require('../models/todo');

exports.index = function(req,res) {
	Todo.find(function(err,todos) {
		res.send({todos: todos});
	});
};

exports.create = function(req,res) {
	var todo = new Todo(req.body.todo);
	todo.save(function() {
		res.send({todo: todo});
	});
}

exports.update = function(req,res) {
	Todo.findByIdAndUpdate(req.params.id, req.body.todo, function(err, todo) {
		res.send({todo: todo});
	});
};

exports.destroy = function(req,res) {
	Todo.findByIdAndRemove(req.params.id, function(err, todo) {
		res.send({todo: todo});
	});
};