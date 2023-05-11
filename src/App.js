import {useEffect, useContext} from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodosContext from './context/todos';

function App() {  
  const {fetchTodos} = useContext(TodosContext);

  useEffect(() => {
    fetchTodos()
  }, []);

  return (
      <div>
        <TodoCreate/>
        <br></br>
        <TodoList />
      </div>    
    );
}

export default App;