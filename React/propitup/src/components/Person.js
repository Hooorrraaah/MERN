import React, { Component } from 'react';

class Person extends Component{

    render(){
        return(
        <div>
            {this.props.personCard}
            {this.props.children}
        </div>
        );
    }
}

export default Person