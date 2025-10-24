import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Title from './components/Title';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  function handleAddTodo(todo) {
    if (!todo) {
      setError('Todo cannot be empty');
      return;
    }
    setTodos((prevTodos) => [...prevTodos, todo]);
    setError('');
  }

  return (
    <>
      <Title>Lista de Tarefas</Title>
      <AddTodo onAddTodo={handleAddTodo} error={error} />
      <List todos={todos} />
    </>
  );
}

export default App;
