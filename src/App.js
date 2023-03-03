import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import Container from "./components/Container/Container";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import Modal from "./components/Modal/Modal";
import IconButton from "./components/IconButton/IconButton";
import { ReactComponent as AddIcon } from "./icons/add.svg";
// import initialTodos from "./todos.json";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    setTodos(() => [todo, ...todos]);

    togleModal();
  };

  const deleteTodo = (todoId) => {
    setTodos(() => todos.filter((todo) => todo.id !== todoId));
  };

  const toggleCompleted = (todoId) => {
    setTodos(() =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTodos = () => {
    const normolazedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normolazedFilter)
    );
  };

  const getCompletedTodoCount = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  const togleModal = () => {
    setShowModal(!showModal);
  };

  const totalTodoCount = todos.length;
  const completedTodoCount = getCompletedTodoCount();
  const visibleTodos = getVisibleTodos();

  return (
    <Container>
      <IconButton onClick={togleModal}>
        <AddIcon width="40px" fill="#fff" />
      </IconButton>
      {/* <button type="button" onClick={this.togleModal}>
          open modal
        </button> */}
      {showModal && (
        <Modal onClose={togleModal}>
          <TodoEditor onSubmit={addTodo} />
          <button type="button" onClick={togleModal}>
            close
          </button>
        </Modal>
      )}
      <div>
        <p>Общее кол-во: {totalTodoCount}</p>
        <p>Кол-во выполненных: {completedTodoCount}</p>
      </div>
      <Filter value={filter} onChange={changeFilter} />
      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </Container>
  );
}

export default App;

// class App extends Component {
//   state = {
//     todos: [],
//     filter: "",
//     showModal: false,
//   };

//   componentDidMount() {
//     // console.log("componentDidMount");

//     const todos = localStorage.getItem("todos");
//     const parsedTodos = JSON.parse(todos);

//     if (parsedTodos) {
//       this.setState({ todos: parsedTodos });
//     }
//   }

//   componentDidUpdate(prevProps, prevstSate) {
//     // console.log("componentDidUpdate");

//     if (this.state.todos !== prevstSate.todos) {
//       // console.log("обновилось поле todos");
//       localStorage.setItem("todos", JSON.stringify(this.state.todos));
//     }
//   }

//   addTodo = (text) => {
//     // console.log(text);
//     const todo = {
//       id: nanoid(),
//       text,
//       completed: false,
//     };
//     this.setState(({ todos }) => ({
//       todos: [todo, ...todos],
//     }));

//     this.togleModal();
//   };

//   deleteTodo = (todoId) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((todo) => todo.id !== todoId),
//     }));
//   };

//   toggleCompleted = (todoId) => {
//     this.setState(({ todos }) => ({
//       todos: todos.map((todo) =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { todos, filter } = this.state;
//     const normolazedFilter = filter.toLowerCase();
//     return todos.filter((todo) =>
//       todo.text.toLowerCase().includes(normolazedFilter)
//     );
//   };

//   getCompletedTodoCount = () => {
//     const { todos } = this.state;
//     return todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   togleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { todos, filter, showModal } = this.state;

//     const totalTodoCount = todos.length;
//     const completedTodoCount = this.getCompletedTodoCount();
//     const visibleTodos = this.getVisibleTodos();

//     return (
//       <Container>
//         <IconButton onClick={this.togleModal}>
//           <AddIcon width="40px" fill="#fff" />
//         </IconButton>
//         {/* <button type="button" onClick={this.togleModal}>
//           open modal
//         </button> */}
//         {showModal && (
//           <Modal onClose={this.togleModal}>
//             <TodoEditor onSubmit={this.addTodo} />
//             <button type="button" onClick={this.togleModal}>
//               close
//             </button>
//           </Modal>
//         )}
//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <TodoList
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       </Container>
//     );
//   }
// }

// export default App;
