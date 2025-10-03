import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';

function AddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState('');

  return (
    <>
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
    </>
  );
}

export default AddTodo;
