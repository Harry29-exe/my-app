import React, { Component } from 'react';
import Product from './product';


class Products extends Component {

    state = { 
        url: "http://localhost:8080",
        products: []
    }

    componentDidMount() {
        fetch( this.state.url + "/api/products" )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.length);
            for(let i = 0; i< data.length; i++) {
                data[i].imgUrl = this.state.url + data[i].imgUrl;
                console.log(data[i].imgUrl);
            }
            this.setState({products: data});
        });
    }

    handleTest = () => {
        let products = this.state.products;
        if(products.length > 0) {
            console.log(products[0].price);
            return products[0].price;
        } else {
            return "No products";
        }
    }

    render() { 
        return ( 
            <div>
                
                <span className="badge badge-secondary">{this.handleTest()}</span>
                {/* <span className='badge badge-secondary'>Span</span> */}
                {this.state.products.map(product => (
                    // <Product key={product.id} name={product.name} 
                    // imgUrl={this.state.url + product.imgUrl} price={product.price}/>
                    <Product key={product.id} product={product} test={this.handleTest}/>
                ))}
                <span></span>
            </div>
         );
    }
}
 
export default Products;