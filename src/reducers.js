import { ADD_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [], // Load tasks from local storage
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { id: Date.now(), text: action.payload.text };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save tasks to local storage
      return {
        ...state,
        todos: updatedTodos,
      };
    case REMOVE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(filteredTodos)); // Save tasks to local storage
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
