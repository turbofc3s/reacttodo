import {createContext, useState} from 'react';
import axios from 'axios';


const TodosContext = createContext();

function Provider({children}) {

const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
   const response = await axios.get("http://localhost:3001/todos");

   setTodos(response.data);
  };	


const createTodo = async (event) => {
    const response = await axios.post('http://localhost:3001/todos', {
        event,
    });
      const updatedTodos = [
      ...todos, 
      response.data
    ]
    setTodos(updatedTodos);
  };

  const editTodos = async (id, newTitle) => {
   const response = await axios.put(`http://localhost:3001/todos/${id}`, {
     event: newTitle
   });

    const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
            return {...todo, ...response.data }
        }
        return todo;
    })

    setTodos(updatedTodos)

  };

  const deleteTodos = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    
    const newTodos = todos.filter((todo) => {
         return todo.id !== id;
      })
    setTodos(newTodos)
    }   	

    const valueToShare ={
    	fetchTodos,
    	createTodo,
    	editTodos,
    	deleteTodos,
    	todos

    }

  return (
    <TodosContext.Provider value={{valueToShare}}>
      { children}
    </TodosContext.Provider>
  )    
}


export {Provider}
export default TodosContext;