import React from 'react';

const TodoItem = (props) => (
  <li className="space-out-todo-items">
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleChangeProps(props.todo.id)}
    />
    {props.todo.title}

    <button className="delete-btn" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
      Delete
    </button>
  </li>
);
export default TodoItem;
