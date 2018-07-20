export default (todoList,statusType) => {
    let list = todoList
    if (statusType === "complete") {
      list = list.filter(i => i.isComplete == true)
    } else if (statusType === "active") {
      list = list.filter(i => i.isComplete == false)
    }
    return list
  }