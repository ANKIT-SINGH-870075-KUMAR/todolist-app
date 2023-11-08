import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (text) => {
    if (!text) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const todoCards = todos.map((todo) => {
    const { id, text, completed } = todo;
    const statusButtonClass = completed ? "btn btn-outline-success" : "btn btn-outline-danger";
    const statusButtonText = completed ? "Completed" : "Pending";

    return (
      <tr key={id}>
        <th scope="row">{id}</th>
        <td>{text}</td>
        <td>
          <button className={statusButtonClass} onClick={() => toggleTodoCompletion(id)}>
            {statusButtonText}
          </button>
        </td>
        <td>
          <button className="btn btn-outline-light" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="App">
        <h1 className="d-flex justify-content-center">Todo List</h1>
        <form className="d-flex justify-content-center" onSubmit={(e) => {
          e.preventDefault();
          addTodo(newTodo);
        }}>
          <input type="text" className="form-control mx-3" style={{ width: "300px", display: "inline-flex" }} name="newTodo" placeholder="Enter a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button type="submit" onClick={() => addTodo(newTodo)} className="btn btn-outline-dark mx-3">Add Todo</button>
        </form>
      </div>

      <div className="container my-3">
        <div className="row">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Note</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{todoCards}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
