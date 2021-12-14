import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();

  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });

  const Todos = () => {
    const todos = useSelector((state) => state.todo.todos);

    const handleDelete = (id) => {
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    };

    if (!todos || !todos.length) {
      return <h4 className="text-center text-success">No Todos</h4>;
    }
    return (
      <>
        <div className="">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="d-flex justify-content-between bg-light p-1 mb-2 rounded"
            >
              <h5 className="text-capitalize">{todo.label}</h5>
              <div
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="w-25 mx-auto bg p-5">
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control w-75"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleClick} className="btn btn-success w-25">
          Add Todo
        </button>
      </div>{" "}
      <Todos />
    </div>
  );
}

export default App;
