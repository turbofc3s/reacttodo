import {useState, useContext} from 'react';
import TodosContext from '../context/todos';

function TodoCreate() {
   const [action, setAction] = useState('');
   const {createTodo} = useContext(TodosContext)

   const handleChange = (event) => {
   	 setAction(event.target.value);
   };

   const handleSubmit = (event) => {
   	 event.preventDefault();
   	 createTodo(action);
   	 setAction('');
   };

	return (
		<div>
		  <form onSubmit={handleSubmit} >
		    <input placeHolder="Enter todo here" value={action} onChange={handleChange} />
		    <button>Create Todo!</button>
		  </form>
		</div>
    )
};

export default TodoCreate;