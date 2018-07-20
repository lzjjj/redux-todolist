import { connect } from 'react-redux'
import AddItem from "../compoments/AddItem"
import { addItem } from '../Actions'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null,mapDispatchToProps)(AddItem)