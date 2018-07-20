export default (state = {
    todoList: [],
    status: "all"
}, action) => {

    switch (action.type) {
        case "add":
            {
                let todoList = [...state.todoList]
                todoList.push(action.item)
                return {
                    todoList: todoList,
                    status: state.status
                }
            }

        case "check":
            {
                let todoList = state.todoList.concat()
                todoList.find(i => i.id == action.itemId).isComplete = action.isCheck
                return {
                    todoList: todoList,
                    status: state.status
                }
            }
        case "status":
            {
                let todoList = state.todoList.concat()
                return {
                    todoList: todoList,
                    status: action.status
                }
            }
            case "edit":
            {
                let todoList = state.todoList.concat()
                todoList.find(i => i.id == action.itemId).content = action.content
                return {
                    todoList: todoList,
                    status: state.status
                }
            }

        default:
            return state
    }
}