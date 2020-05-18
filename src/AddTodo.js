import React, { Component } from 'react';

class AddTodo extends Component {
		
		state = {
			newtodo : ""
		}
		todoinput = (e) =>{
			this.setState({
				newtodo : e.target.value
			});
		}
		addTodoForm = (e) =>{
			e.preventDefault();
			this.props.addTodo(this.state.newtodo);
			this.setState({
				newtodo : " "
			});
		}
	render(){
 		return (
			   <form onSubmit={this.addTodoForm} >
				   <div className="panel-block">
				    <p className="control has-icons-left">  
					      <input className="input is-rounded" onChange={this.todoinput} type="text" value={this.state.newtodo} placeholder="Add Todo" />
				      <span className="icon is-left"> + </span>
				    </p>
				  </div>
			    </form>
			)
	}
}

export default AddTodo;
