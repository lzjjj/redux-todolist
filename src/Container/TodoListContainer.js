import { connect } from 'react-redux'
import TodoList from "../compoments/TodoList"
import { checkItem, editItemContent } from '../Actions'

const mapStateToProps = (state, ownProps) => {
    return {
        todoList: state.todoList,
        status: state.status
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCheckItem: (itemId, isCheck) => dispatch(checkItem(itemId, isCheck)),
        onEditItemContent: (itemId, content) => dispatch(editItemContent(itemId, content))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)