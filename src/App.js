import React, { Component } from "react";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import initialTodos from "./todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    // console.log(text);
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normolazedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normolazedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <Filter value={filter} onChange={this.changeFilter} />
      </>
    );
  }
}

export default App;
