import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const Todos = () => {
    const todos = useSelector((state) => state.todos);
    if (!todos || !todos.length) {
      return <h4>No Todos</h4>;
    }
    return (
      <>
        <ul>
          {todos.map((todo) => (
            <li>{todo.label}</li>
          ))}
        </ul>
      </>
    );
  };
  const TodoInput = () => {
    const [newTodo, setNewTodo] = useState();
    const dispatch = useDispatch();
    const handleClick = () =>
      dispatch({
        type: "ADD_TODO",
        payload: {
          label: newTodo,
          id: Math.ceil(Math.random() * 100),
        },
      });

    return (
      <>
        <input
          type="text"
          className="form-control w-25 mx-auto mt-5"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleClick} className="btn btn-success my-3">
          Add Todo
        </button>
      </>
    );
  };
  return (
    <div className="App">
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
