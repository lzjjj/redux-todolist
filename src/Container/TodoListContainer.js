import { connect } from 'react-redux'
import TodoList from "../compoments/TodoList"
import { checkItem, editItemContent } from '../Actions'
import { apiChecked,apiEdit } from "../Api/TodoResourceApi"

const mapStateToProps = (state, ownProps) => {
    return {
        todoList: state.todoList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCheckItem: (itemId, isCheck) => {
            dispatch(checkItem(apiChecked(itemId, isCheck)))
        },
        onEditItemContent: (itemId, content) => {
            dispatch(editItemContent(apiEdit(itemId, content)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)