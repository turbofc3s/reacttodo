import {useState, useContext} from 'react';
import TodosContext from '../context/todos'

function TodoEdit({todo, onSubmit}) {

	const [title, setTitle] = useState(todo.event);
	const {editTodos} = useContext(TodosContext);
 
	const handleChange = (event) => {
		setTitle(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();	
		onSubmit()
		editTodos(todo.id, title)	
	}

	return (
	  <form onSubmit={handleSubmit}>
	    <label>Todo</label>
	    <input  onChange={handleChange} value={title} />
	    <button>Save</button>
	  </form>
	)  
}	  

export default TodoEdit;