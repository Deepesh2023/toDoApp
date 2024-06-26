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

  const changeStatus = (toDoToBeUpdated) => {
    const updatedToDo = {
      ...toDoToBeUpdated,
      isDone: !toDoToBeUpdated.isDone,
    };

    const updatedToDoList = toDoList.map((toDo) =>
      toDo.task === toDoToBeUpdated.task ? updatedToDo : toDo
    );

    window.localStorage.setItem("ToDoList", JSON.stringify(updatedToDoList));
    setTodoList(updatedToDoList);
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
      <ToDo
        toDoList={toDoList}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
      />
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

const ToDo = ({ toDoList, deleteTodo, changeStatus }) => {
  if (toDoList) {
    return (
      <div>
        <List
          list={toDoList.filter((toDo) => toDo.isDone === false)}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
        />

        <List
          list={toDoList.filter((toDo) => toDo.isDone === true)}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
        />
      </div>
    );
  }
  return null;
};

const List = ({ list, deleteTodo, changeStatus }) => {
  return (
    <>
      <ol>
        {list.map((toDo) => (
          <li key={toDo.task}>
            <span onClick={() => changeStatus(toDo)}>{toDo.task}</span>
            <button onClick={() => deleteTodo(toDo.task)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default App;
