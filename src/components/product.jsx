import React, { Component } from 'react';

class Product extends Component {

    state = { 
        imgXRes: 150,
        imgYRes: 150
     }

    
    handleClick = () => {
        this.props.product.price++; 
        this.props.test();
        console.log(this.props.product.price);
        this.render();
    }

    render() { 
        return ( 
            // <a href="http://localhost:8080">
            
            <div className="card bg-primary text-light" style={{display: 'inline-block', margin: "10px"}}
            onClick={this.handleClick}>
                <img className="card-img-top" src={this.props.product.imgUrl} alt='alt' 
                style={{
                    objectFit: 'cover',
                    width: this.state.imgXRes + "px",
                    height: this.state.imgYRes + "px"
                }}></img>
                <div className="card-body" style={{textAlign: "center"}}>
                {this.props.product.name} <br/>
                {this.props.product.price}
                </div>
            </div>
            // </a>
         );
    }
}

 
export default Product;