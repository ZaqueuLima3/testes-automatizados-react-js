import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "../store/ducks/todos";

class TodoList extends Component {
  state = {
    newTodo: ""
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    const { addTodo } = this.props;
    addTodo(this.state.newTodo);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
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

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
