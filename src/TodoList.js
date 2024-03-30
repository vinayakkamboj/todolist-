import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          {todo.text}
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => handleRemove(todo.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
