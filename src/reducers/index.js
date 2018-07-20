import * as types from '../Constants/ActionTypes'
export default (state = {
    todoList: [],
    status: types.ADD
}, action) => {

    switch (action.type) {
        case types.ADD:
            {
                let todoList = [...state.todoList]
                todoList.push(action.item)
                return {
                    todoList: todoList,
                    status: state.status
                }
            }

        case types.CHECK:
            {
                let todoList = state.todoList.concat()
                todoList.find(i => i.id == action.itemId).isComplete = action.isCheck
                return {
                    todoList: todoList,
                    status: state.status
                }
            }
        case types.STATUS:
            {
                let todoList = state.todoList.concat()
                return {
                    todoList: todoList,
                    status: action.status
                }
            }
            case types.EDIT:
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