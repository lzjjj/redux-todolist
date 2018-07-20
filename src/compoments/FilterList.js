import React, { Component } from 'react';

class FilterList extends Component {
    constructor(props){
        super(props);
    }
  render() {
   
    return (
        <div>
            <ul className="filters">
              <li>
                <a href="#" data-filter="all" className={this.props.status==="all"? "selected" :""}
                  onClick={()=>this.props.onChangeStatus('all')}>ALL</a>
              </li>
              <li>
                <a href="#" data-filter="active" className={this.props.status==="active"? "selected" :""}
                  onClick={()=>this.props.onChangeStatus('active')}>Active</a>
              </li>
              <li>
                <a href="#" data-filter="complete" className={this.props.status==="complete"? "selected" :""}
                  onClick={()=>this.props.onChangeStatus('complete')}>Complete</a>
              </li>
            </ul>
          </div >
    );
  }
}

export default FilterList;