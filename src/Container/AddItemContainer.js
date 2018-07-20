import { connect } from 'react-redux'
import AddItem from "../compoments/AddItem"
import { addItem } from '../Actions'
const mapStateToProps = (state, ownProps) => {
    return {
        todoList: state.todoList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItem: (item) => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)