import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import 'bulma/css/bulma.min.css'

class App extends Component {
  state = {
    todos : [
      { id:1 , content : "Add One", isCompleted : false},
      { id:2 , content : "Add Two", isCompleted : true},
      { id:3 , content : "Add Three", isCompleted : false},
    ]
  }
  addTodo= (req) => {
    const newTodo = {
      id : Math.random(),
      content : req,
      isCompleted : false
    }
    let newTodoList = [...this.state.todos, newTodo];
    this.setState({
      todos : newTodoList
    })
  }
  completeTodo = (req) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if(todo.id == req) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo;
      })
    })
  }
  render(){
    return (
      <div className="container">
      <nav className="panel">
        <p className="panel-heading">
          Todo List
        </p>
          <AddTodo addTodo={this.addTodo}/>
          <TodoList todos={this.state.todos} completeTodo={this.completeTodo} />
        </nav>
      </div>
    );
  }
}

export default App;
