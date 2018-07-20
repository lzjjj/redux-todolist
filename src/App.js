import React, { Component } from 'react';
import './App.css';
import AddItem from "./Container/AddItemContainer"
import TodoList from "./Container/TodoListContainer"
import FilterList from "./Container/FilterListContainer"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <div >
          <AddItem addToDoList={(e) => this.addToDoList(e)} />
          <TodoList />
          <FilterList />
        </div >

      </div >
    );
  }
}

export default App;
