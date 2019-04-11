import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Filter from './components/Filter'

class App extends Component {
  state = {
    todos: [
      {todo: "go to somewhere", done: false,id: 1},
      {todo: "but t-shirt", done: false, id: 2},
    ],
    todo: "",
    done: false,
    id : 3
  }

handleChange = (e) => {
  this.setState({ todo: e.target.value })
}

handleSubmit = (e) => {
  const todos = this.state.todos
  const todo = this.state.todo
  const done = this.state.done
  const id = this.state.id

  this.setState({ id: id + 1 })
  todos.push({ todo, done, id });
  this.setState({ todos: this.state.todos });
  this.setState({ todo : "" });
  e.preventDefault();
}

deleteTodo = (index) => {
  const todos = this.state.todos
  const id = todos[index].id
  const del = todos.find(todo => todo.id === id)
  todos.splice(del,1)
  this.setState({ todos: this.state.todos })
}

checked = (index) => {
  const todos = this.state.todos;
  todos[index].done = !todos[index].done;
  this.setState({
    todos
  })
  // console.log(this.state.todos[index])
}


  render() {
    return (
      <div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}  value={this.state.todo}/>
          <button type="submit">add to do</button>
        </form>
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} checked={this.checked}/>
        <Filter todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
