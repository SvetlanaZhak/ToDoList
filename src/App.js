import React, { Component } from 'react';
import TodoTable from './components/TodoTable';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', date: '', todos: [] }
  }

  inputChanged = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = { description: this.state.description, date: this.state.date };
    this.setState({
      date: '',
      description: '',
      todos: [...this.state.todos, newTodo]
    });
  }
  deleteItem = (row) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== row.index)
    })
  }


  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            TODOLIST
          </Toolbar>
        </AppBar>
        <div>
          <form onSubmit={this.addTodo}>
            <fieldset>
              <legend>New todo:</legend>
              <TextField type="text" label="Description" name="description" onChange={this.inputChanged} value={this.state.description} />
              <TextField type="date" label="Date" InputLabelProps={{ shrink: true, }} name="date" onChange={this.inputChanged} value={this.state.date} />
              <Button onClick={this.addTodo} variant="contained" color="primary" size="small">
                <SaveIcon />
                Add
              </Button>
            </fieldset>
          </form>
        </div>
        <TodoTable todos={this.state.todos} onDelete={this.deleteItem} />
      </div >
    );
  }
}

export default App;