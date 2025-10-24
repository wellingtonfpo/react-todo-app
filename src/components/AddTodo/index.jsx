import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

function AddTodo({ onAddTodo, error }) {
  const [todo, setTodo] = useState('');

  return (
    <div className='add-todo'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Input
        type='text'
        placeholder='Add new todo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={() => {
          setTodo('');
          onAddTodo(todo);
        }}
      >
        Add Todo
      </Button>
    </div>
  );
}

export default AddTodo;
