import React, { Component } from 'react';
import Row from './row.js';

class Table extends Component {
    state = {  
        products: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/products")
            .then(response => response.json)
            .then(data => {
                this.setState({products: data});
                this.render();
            });
    }


    render() { 
        return ( 
            <div>
                <ul>{this.state.products.map(product => new Row(product))}</ul>
            </div>
         );
    }
}

export default Table;