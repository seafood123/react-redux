import React, { Component } from 'react';
import store from '../Store'

class AddNumber extends Component {
  state = {size : 1};
  render() {
    return (
      <div>
        <h1>ADD NUMBER</h1>
        <input type="button" value="+" onClick={function(e){
          store.dispatch({type:"INCREMENT", size:this.state.size});
        }.bind(this)}></input>
        <input type="text" value={this.state.size} onChange={function(e){
          this.setState({size:Number(e.target.value)});
        }.bind(this)}></input>
      </div>
    )
  }
}

export default AddNumber;
