export default (state = {
    todoList: [],
    status: "all"
}, action) => {

    switch (action.type) {
        case "add":
            {
                let todoList = state.todoList.concat()
                todoList.push(action.item)
                console.log(action)
                return Object.assign({}, state, {
                    todoList: todoList,
                    status: state.status
                })
            }

        case "check":
            {
                let todoList = state.todoList.concat()
                console.log(action.itemId)
                todoList.find(i => i.id == action.itemId).isComplete = action.isCheck
                return Object.assign({}, state, {
                    todoList: todoList,
                    status: state.status
                })
            }
        case "status":
            {
                let todoList = state.todoList.concat()
                return Object.assign({}, state, {
                    todoList: todoList,
                    status: action.status
                })
            }
            case "edit":
            {
                let todoList = state.todoList.concat()
                todoList.find(i => i.id == action.itemId).content = action.content
                return Object.assign({}, state, {
                    todoList: todoList,
                    status: state.status
                })
            }

        default:
            return state
    }
}