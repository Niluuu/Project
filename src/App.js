import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends Component {
  state = {
    todos: [
      {todo: "go to somewhere", done: false},
      {todo: "but t-shirt", done: false},
    ],
    todo: "",
    done: false,
  }

handleChange = (e) => {
  this.setState({ todo: e.target.value })
}

handleClick = () => {
  const todos = this.state.todos;
  const todo = this.state.todo;
  const done = this.state.done;

  todos.push({ todo, done });
  this.setState({ todos: this.state.todos });
  this.setState({todo : ""});
}

deleteTodo = () => {
  alert("delate");
  console.log(this);
}

checked = (index) => {
  var done = this.state.todos[index].done;
  this.setState({ done: done })

  console.log(this.state.todos[index])
}


  render() {
    return (
      <div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <input onChange={this.handleChange}  value={this.state.todo}/>
        <button onClick={this.handleClick}>add to do</button>
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} checked={this.checked}/>
      </div>
    );
  }
}

export default App;
