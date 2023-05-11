import {useState, useContext} from 'react';
import TodoEdit from './TodoEdit';
import TodosContext from '../context/todos'

function TodoShow({todo}) {
	const [showEdit, setShowEdit] = useState(false);
	const {deleteTodos} = useContext(TodosContext)

	const handleDelete = () => {
		deleteTodos(todo.id);
	};

	const handleEdit = () => {
      setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(false);
	}

	let content = <h3>{todo.event}</h3>

	if(showEdit) {
		content = <TodoEdit todo={todo} onSubmit={handleSubmit}/>
	}

	return (
	  <div>
	    <div>{content}</div>
	    <button onClick={handleEdit}>Edit</button>
	    <button onClick={handleDelete}> Delete</button>
	    
	  </div>
	)  
}

export default TodoShow;