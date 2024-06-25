import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [toDoList, setTodoList] = useState(null);

  // console.log(window.localStorage.getItem("ToDoList"));

  // window.localStorage.clear();

  useEffect(() => {
    if (window.localStorage.getItem("ToDoList")) {
      const toDoList = JSON.parse(window.localStorage.getItem("ToDoList"));
      toDoList.length === 0 ? setTodoList(null) : setTodoList(toDoList);
    }
    return;
  }, []);

  const addToDo = (toDo) => {
    const newTodo = {
      task: toDo,
      isDone: false,
    };

    if (toDoList === null) {
      window.localStorage.setItem("ToDoList", JSON.stringify([newTodo]));
      setTodoList([newTodo]);
      return;
    }

    const updatedToDo = toDoList.concat(newTodo);

    window.localStorage.setItem("ToDoList", JSON.stringify(updatedToDo));
    setTodoList(updatedToDo);
  };

  const deleteTodo = (toDoToBeDeleted) => {
    const updatedToDo = toDoList.filter(
      (toDo) => toDo.task !== toDoToBeDeleted
    );
    window.localStorage.setItem("ToDoList", JSON.stringify(updatedToDo));
    if (updatedToDo.length === 0) {
      setTodoList(null);
      return;
    }
    setTodoList(updatedToDo);
  };

  return (
    <>
      <h1>ToDo App</h1>
      <NewToDoForm addToDo={addToDo} />
      <ToDoList toDoList={toDoList} deleteTodo={deleteTodo} />
    </>
  );
};

const NewToDoForm = ({ addToDo }) => {
  const [toDo, setTodo] = useState("");

  const addButtonAction = (event) => {
    event.preventDefault();
    addToDo(toDo);
    setTodo("");
  };

  return (
    <form onSubmit={addButtonAction}>
      <label htmlFor="">What do you want to do? </label>
      <input
        type="text"
        value={toDo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const ToDoList = ({ toDoList, deleteTodo }) => {
  if (toDoList) {
    return (
      <>
        <ol>
          {toDoList.map((toDo) => (
            <li key={toDo.task}>
              {toDo.task}
              <button onClick={() => deleteTodo(toDo.task)}>Delete</button>
            </li>
          ))}
        </ol>
      </>
    );
  }

  return (
    <>
      <h2>No tasks</h2> <p>add task to get things done</p>
    </>
  );
};

export default App;
