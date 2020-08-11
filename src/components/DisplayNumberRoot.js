import React, { Component } from 'react';
import DisplayNumber from '../components/DisplayNumber';

class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>DisplayNumberRoot</h1>
                <DisplayNumber></DisplayNumber>
            </div>
        )
    }
}

export default DisplayNumberRoot;
