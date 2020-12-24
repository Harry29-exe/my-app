import React, { Component } from 'react';
import './row.css';

class Row extends Component {

    render() { 
        return (
        <div className="Row">
            <span className="badge badge-primary m-2" style={{fontWeight: "bold"}} >
                {this.product.name}
            </span>
            <button className="btn btn-secondary btn-sm">Details</button>
        </div>);
    }
}
 
export default Row;
