import React, { Component } from 'react';
import store from '../Store';
class DisplayNumber extends Component {
  state = {number:store.getState().number};
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({number: store.getState().number});
    }.bind(this));
  }
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="button" value="+"></input>
        <input type="text" value="0" value={this.state.number} readonly></input>
      </div>
    )
  }
}

export default DisplayNumber;