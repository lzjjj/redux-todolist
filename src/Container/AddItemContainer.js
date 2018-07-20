import { connect } from 'react-redux'
import AddItem from "../compoments/AddItem"
import { addItem } from '../Actions'
import {apiAdd} from '../Api/TodoResourceApi'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddItem: (item) => {
            if( apiAdd(item)){
                dispatch(addItem(item))
            } else {
                alert("增加失败！")
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(AddItem)