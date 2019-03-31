import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        { todos.map((todo,index) => { 
          return <li key={index} id={index}>
            <span onClick={() => this.props.checked(index)}><i class="fas fa-check"></i></span>
            <p className={todo.done ? "done": null}>{todo.todo}</p>
            <span onClick={() => this.props.deleteTodo(todo)}>&times;</span>
          </li> 
        }) }
      </div>
    )
  }
}
