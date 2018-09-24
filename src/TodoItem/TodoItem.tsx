import * as React from 'react';

import './TodoItem.css';
import ITodoItem from '../models/TodoItem.interface';

interface TodoItemProps {
  item: ITodoItem;
  index: number;
  removeItem: (index: number) => void;
}

interface TodoItemState {}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  public render() {
    return (
      <div className="todo-item-container">
        <div>{this.props.item.name}</div>
        <button onClick={() => this.props.removeItem(this.props.index)}>
          Remove
        </button>
      </div>
    );
  }
}

export default TodoItem;
