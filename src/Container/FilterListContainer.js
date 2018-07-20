import { connect } from 'react-redux'
import FilterList from "../compoments/FilterList"
import { changeStatus } from '../Actions'
const mapStateToProps = (state, ownProps) => {
    return {
        status: state.status
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeStatus: (status) => dispatch(changeStatus(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList)