import { useState, useContext } from "react";
import TodosContext from "../context/todos";
import UserContext from "../context/User-context";

function TodoCreate() {
  const [action, setAction] = useState("");
  const [isUserLogedIn, setisUserLogedIn] = useState(false);

  const { createTodo } = useContext(TodosContext);

  const { user } = useContext(UserContext);

  const email = user?.email;

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) {
      setisUserLogedIn(false);
      alert("Please Login To Create a Todo List");
    } else {
      event.preventDefault();
      createTodo(action, email);
      setAction("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter todo here"
          value={action}
          onChange={handleChange}
        />
        <button>Create Todo!</button>
      </form>
    </div>
  );
}

export default TodoCreate;
