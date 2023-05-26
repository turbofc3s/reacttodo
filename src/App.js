import {useEffect, useContext} from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodosContext from './context/todos';
import './App.css';
import Login from './components/Login';

function App() {  
  const {fetchTodos} = useContext(TodosContext);

  useEffect(() => {
    fetchTodos()
  }, []);

  return (
    <div>
        <Login /> 
        <h1>My Todo List</h1>
        <TodoCreate/>
        <br></br>
        <TodoList />
      </div>         
    );
}

export default App;