import { connect } from 'react-redux'
import FilterList from "../compoments/FilterList"
import { changeStatus } from '../Actions'
import { apiChangeStatus } from '../Api/TodoResourceApi'
const mapStateToProps = (state, ownProps) => {
    return {
        status: state.status
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeStatus: (status) => {
                dispatch(changeStatus(status,apiChangeStatus(status)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList)