import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  checkItem = (event, itemId) => {
    this.props.onCheckItem(itemId, event.target.checked)
  }
  editItem = (event) => {
    event.target.setAttribute("contentEditable", true);
    event.target.focus()
  }
  handOnKeyPress = (event, itemId) => {
    var keycode = (event.keyCode
      ? event.keyCode
      : event.which);
    if (keycode == '13') {
      event.target.setAttribute("contentEditable", false);
      this.props.onEditItemContent(itemId, event.target.innerText)
    }
  }
  showTodoList = (statusType) => {
    let list = this.props.todoList
    let type = "all"
    if (statusType) {
      type = statusType
    }
    if (type === "complete") {
      list = list.filter(i => i.isComplete == true)
    } else if (type === "active") {
      list = list.filter(i => i.isComplete == false)
    }
    return list
  }
  render() {
    return (
      <div >
        <ol>
          {
            this.showTodoList(this.props.status).map((i, index) => {
              console.log(this.props.todoList)
              return (<li
                className={i.isComplete ? "checked" : ""}
                key={i.id}
                onDoubleClick={(e) => this.editItem(e)}
                onKeyPress={(e, itemId) => this.handOnKeyPress(e, i.id)}>
                <input name="done-todo" type="checkbox" className="done-todo"
                  onChange={(event, itemId) => this.checkItem(event, i.id)}
                  checked={i.isComplete ? true : false} />
                {i.content}
              </li>)
            })
          }
        </ol>
      </div>
    );
  }
}

export default TodoList;