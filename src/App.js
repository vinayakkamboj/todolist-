import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Image from './images/logo192.png';

function App() {
  return (
    <div className="container mt-5 background-color: #f4f4f4; " >
      <img src={Image} alt="Description of the image" className="img-fluid justify-content-center align-items-center p-4" style={{ maxWidth: '200px' }}/>
      {/* <h1 className='mb-5 text-xl font-weight-bold'>To Do List</h1> */}
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
