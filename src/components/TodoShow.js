import {useState, useContext} from 'react';
import TodoEdit from './TodoEdit';
import TodosContext from '../context/todos'
import UserContext from '../context/User-context';


function TodoShow({todo}) {
	const [showEdit, setShowEdit] = useState(false);
	const {deleteTodos} = useContext(TodosContext);
	const {user} = useContext(UserContext);


	const handleDelete = () => {
		deleteTodos(todo.id);
	};

	const handleEdit = () => {
      setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(false);
	}

	let content = <h3>{todo.event} {todo.email} </h3>

	if(showEdit) {
		content = <TodoEdit todo={todo} onSubmit={handleSubmit}/>
	}

	return (
	  <div className="list">
	    <div>{content}</div>
	    {!user.email ?
	      null :	
	      <div>	
	        <button onClick={handleEdit}>Edit</button>
	        <button onClick={handleDelete}> Delete</button>
	      </div>
	    }    	    
	  </div>
	)  
}

export default TodoShow;