import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={text}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default AddTodo;
