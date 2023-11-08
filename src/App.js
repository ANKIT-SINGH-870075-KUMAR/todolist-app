import React, { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);

  const addTodo = (text) => {
    if (!text) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text}
    ]);
  };

  const taskStatus = () => {
    setCompleted(true)
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  };

  const todoCards = todos.map((todo) => {
    return (
      <tr key={todo.id}>
        <th scope="row">{`${todo.id}`}</th>
        <td>{`${todo.text}`}</td>
        {(completed === false) &&<td> <button className={`${completed}` && "btn btn-outline-danger"} onClick={()=>taskStatus()}>pending</button></td>}
        {(completed === true) &&<td> <button className={`${completed}` && "btn btn-outline-success"} onClick={()=>taskStatus()}>Completed</button></td>}
        <td><button onClick={()=>deleteTodo(todo.id)} className="btn btn-outline-light">deleteTodo</button></td>
      </tr>
    );
  });

  return (
    <>
      <div className="App">
        <h1 className="d-flex justify-content-center">Todo List</h1>
        <form className="d-flex justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            const text = e.target.elements.newTodo.value.trim();
            addTodo(text);
            e.target.elements.newTodo.value = "";
          }}
        >
          <input type="text" class="form-control mx-3" style={{width: "300px", display: "inline-flex"}} name="newTodo" placeholder="Enter a new todo" />
          <button type="submit" onClick={addTodo()} className="btn btn-outline-dark mx-3">Add Todo</button>
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
        <tbody>
          {todoCards}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};

export default App;
