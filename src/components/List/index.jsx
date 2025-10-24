import { useState } from 'react';

import './style.css';
import Input from '../Input';

function List({ todos }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <ul className='list'>
        <Input
          placeholder='Search todos...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          customStyle='customInput'
        />
        {todos.length === 0 && <p>No todos available...</p>}
        {todos
          .filter((todo) => todo.toLowerCase().includes(search.toLowerCase()))
          .map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
      </ul>
    </>
  );
}

export default List;
