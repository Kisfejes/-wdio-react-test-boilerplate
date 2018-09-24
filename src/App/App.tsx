import * as React from 'react';
import './App.css';
import ITodoItem from '../models/TodoItem.interface';
import TodoItem from '../TodoItem/TodoItem';

interface AppState {
  items: ITodoItem[];
  addItemText: string;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  private inputRef = React.createRef<HTMLInputElement>();

  constructor(props: AppProps) {
    super(props);

    this.state = {
      addItemText: '',
      items: []
    };
  }

  public componentDidMount() {
    const inputNode = this.inputRef.current;
    if (inputNode !== null) {
      inputNode.focus();
    }
  }

  public render() {
    return (
      <div className="app-container">
        <div>
          <input
            ref={this.inputRef}
            type="text"
            value={this.state.addItemText}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                this.addItem();
              }
            }}
            onChange={event => {
              this.setState({ addItemText: event.target.value });
            }}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <div className="app-todo-list">
          {this.state.items.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              removeItem={this.removeItem}
            />
          ))}
        </div>
      </div>
    );
  }

  private addItem = () => {
    if (this.state.addItemText !== '') {
      this.setState({
        items: [
          ...this.state.items,
          {
            name: this.state.addItemText,
            completed: false
          }
        ],
        addItemText: ''
      });
    }
  };

  private removeItem = (index: number) => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };
}

export default App;
