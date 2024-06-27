const List = ({ list, deleteTodo, changeStatus }) => {
  return (
    <>
      <ol>
        {list.map((toDo) => (
          <li key={toDo.task}>
            <span className="text-3xl" onClick={() => changeStatus(toDo)}>{toDo.task}</span>
            <button onClick={() => deleteTodo(toDo.task)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default List