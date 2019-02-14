import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', todos: [], date: '' }

  }

  descriptionChanged = (event) => {
    this.setState({ description: event.target.value });
  }
  dateChanged = (event) => {
    this.setState({ date: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, { description: this.state.description, date: this.state.date }]
    });
  }

  deleteTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    });
  }


  renderRow = (item, index) => {
    return (
      <tr>
        <td>{item.description}</td>
        <td>{item.date}</td>
        <td><input type="button" onClick={() => this.deleteTodo(index)} value="Delete" /></td>
      </tr>

    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lana's Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <div className="Div-inputs">
              <div>
                <div>Date:</div>
                <input type="date" onChange={this.dateChanged} value={this.state.date} />

              </div>
              <div>
                <div>Description:</div>
                <input type="text" onChange={this.descriptionChanged} value={this.state.description} />
              </div>
              <input type="submit" value="Add" />
            </div>
          </form>

        </div>
        <TodoTable todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

}

export default App;