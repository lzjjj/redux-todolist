export default (state = {
    todoList: [],
    status: "all"
}, action) => {

    switch (action.type) {
        case "add":
            {
                let todoList = state.todoList
                todoList.push(action.item)
                console.log(action)
                return Object.assign({},state,{
                    todoList: todoList,
                    status: "all"
                })
            }

        case "status":
            {
                const newState = [...state];
                newState[action.index]--;
                return newState;
            }

        default:
            return state
    }
}