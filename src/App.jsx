import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [toDoList, setTodoList] = useState(null);

  console.log(window.localStorage.getItem("ToDoList"));

  useEffect(() => {
    if (window.localStorage.getItem("ToDoList")) {
      const toDoList = JSON.parse(window.localStorage.getItem("ToDoList"));
      setTodoList(toDoList);
    }
    return;
  }, []);

  const addToDo = (toDo) => {
    if (toDoList === null) {
      setTodoList([toDo]);
      window.localStorage.setItem("ToDoList", JSON.stringify(toDoList));
      return;
    }
    setTodoList(toDoList.concat(toDo));
    window.localStorage.setItem("ToDoList", JSON.stringify(toDoList));
  };

  return (
    <>
      <h1>ToDo App</h1>
      <NewToDoForm addToDo={addToDo} />
      <ToDoList toDoList={toDoList} />
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

const ToDoList = ({ toDoList }) => {
  if (toDoList) {
    return (
      <>
        <ol>
          {toDoList.map((toDo) => (
            <li key={toDo}>{toDo}</li>
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
