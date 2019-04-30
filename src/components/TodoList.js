import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");

    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.setState(
      {
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ""
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          value={this.state.newTodo}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>Adicionar tudo</button>
      </div>
    );
  }
}
