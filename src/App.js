import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container mt-5 background-color: #f4f4f4;" >
      <h1 className='text-center mb-5 text-xl font-weight-bold'>To Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
