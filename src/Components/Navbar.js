import React, { Component } from 'react';


class Navbar extends React.Component{
    render() {
        return (
            <button onClick={this.props.onClick}>
               {this.props.prenom}
                 </button> 
         
        );
    }
}

export default Navbar;