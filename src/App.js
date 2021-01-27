import React from 'react';
import './App.css';
import Searchwidget from './searchwidget/Searchwidget';
import Todolist from './todolist/Todolist';
import todoArray from './todos.json'

class App extends React.Component {
  state = {
    inputValue: '',
    todoItems: todoArray,
    filteredItems: []
  }
  componentDidMount() {
    this.filterTodoItems();
    console.log(this.state.todoItems)
  }

  filterTodoItems = () => {
    const filterValue = this.state.inputValue;
    const todoList = [...this.state.todoItems]
    if (filterValue) {
      const filteredArr = todoList.filter((todoObj) => todoObj.title.toLocaleLowerCase().search(filterValue) !== -1);
      this.setState({ filteredItems: filteredArr })
    } else {
      this.setState({ filteredItems: todoList })
    }

  }

  inputChangeHandler = (value) => {
    this.setState((prev) => ({ inputValue: value }), this.filterTodoItems)
  }
  render() {

    return (
      <div className="App">
        <Searchwidget inputChangeHandler={this.inputChangeHandler} filterValue={this.state.inputValue} />
        <Todolist list={this.state.filteredItems} />
      </div>
    )
  }
}


export default App;
