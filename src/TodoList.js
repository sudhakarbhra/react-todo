import React from 'react';

function TodoList({todos, completeTodo}){
	const todolist = todos.map(todo => {
		return todo.isCompleted == true 
		?
		<a onClick={() => {completeTodo(todo.id)}} className="panel-block" key={todo.id}><del>{todo.content}</del></a> 
		:
		<a onClick={() => {completeTodo(todo.id)}} className="panel-block" key={todo.id}>{todo.content}</a> 
	})

	return (
		  <div className="panel">
		    {todolist}
		  </div>
		)
}

export default TodoList;
