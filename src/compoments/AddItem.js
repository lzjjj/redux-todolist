import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:""
        }
    }
    generateUUID = () => {
        /*jshint bitwise:false */
        var i,
          random;
        var uuid = '';
    
        for (i = 0; i < 32; i++) {
          random = Math.random() * 16 | 0;
          if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
          }
          uuid += (i === 12
            ? 4
            : (i === 16
              ? (random & 3 | 8)
              : random)).toString(16);
        }
        return uuid;
      }
    addItem=()=>{
        if(this.state.inputValue){
            this.props.onAddItem({ isComplete: false, content: this.state.inputValue, id: this.generateUUID() })
            this.setState({
                inputValue:""
            })
        } else{
            alert("添加todo不能为空")
        }
        
    }
    changeInputValue=(e)=>{
        let inputValue = e.target.value;
        this.setState({
            inputValue
        })
        
    }
  render() {
    return (
        <div>
        <input className="input-text" type="text" value={this.state.inputValue} onChange={(e)=>this.changeInputValue(e)} />
        <div className="button" onClick={()=>this.addItem()}>Add</div>
      </div>
    );
  }
}

export default AddItem;