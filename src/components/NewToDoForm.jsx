import { useState } from "react";

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

export default NewToDoForm;
