import List from "./List";

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
  return (
    <>
      <h2>No tasks here</h2>
    </>
  );
};

export default ToDo;
