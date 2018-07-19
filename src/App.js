import React, { Component } from 'react';
import './App.css';
import AddItem from "./Container/AddItemContainer"
import TodoList from "./Container/TodoListContainer"
import FilterList from "./compoments/FilterList"

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   todoList: [],
    //   status: "all"
    // }
  }
  
  // addToDoList = (e) => {
  //   let todoList = this.props.todoList
  //   todoList.push({ isComplete: false, content: e, id: this.generateUUID() })
  //   this.setState({
  //     todoList
  //   })
  // }
  // checkItem = (e) => {
  //   this.setState({
  //     todoList: e
  //   })

  // }
  // showTodoList = (statusType) => {
  //   let list = this.props.todoList
  //   let type = "all"
  //   if (statusType) {
  //     type = statusType
  //   }
  //   if (type === "complete") {
  //     list = list.filter(i => i.isComplete == true)
  //   } else if (type === "active") {
  //     list = list.filter(i => i.isComplete == false)
  //   }
  //   return list
  // }
  // changeStatus = (type) => {
  //   this.setState({
  //     status: type
  //   })
  // }
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
          {/* <FilterList changeStatus = {(e)=>this.changeStatus(e)} status={this.state.status}/> */}
        </div >

      </div >
    );
  }
}

export default App;
