import { connect } from 'react-redux'
import TodoList from "../compoments/TodoList"



const mapStateToProps = (state, ownProps) => {
    
    return {
        todoList: state.todoList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)