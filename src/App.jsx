import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Title from './components/Title';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <Title>Lista de Tarefas</Title>
      <AddTodo onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
