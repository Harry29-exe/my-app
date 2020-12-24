import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                {/* <a className="navbar-brand" href="http://localhost:3000"> */}
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {/* {this.props.countersNumber} */ 'some number'}
                    </span>
                {/* </a> */}
            </nav>
         );
    }
}
 
export default Navbar;