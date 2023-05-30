import {useEffect, useContext} from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodosContext from './context/todos';
import './App.css';
import Login from './components/Login';

function App() {  
  const {fetchTodos, user} = useContext(TodosContext);

  useEffect(() => {
    fetchTodos()
  }, []);

  return (
    <div>
        <Login /> 
        <h1>My Todo List</h1>
        {user ? 
          <TodoCreate/> : null
        }
        <br></br>
        <TodoList />
      </div>         
    );
}

export default App;