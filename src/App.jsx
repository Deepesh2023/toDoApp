import { useEffect } from "react";
import { useState } from "react";

import NewToDoForm from "./components/NewToDoForm";
import ToDo from "./components/ToDo";

const App = () => {
  const [toDoList, setTodoList] = useState(null);

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

export default App;
