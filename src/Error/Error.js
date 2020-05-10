import React, { Component } from 'react';

import classes from './Error.module.css';
import Button from '../UI/Button/Button';

class Error extends Component{
    HomeHandler = () => {
        this.props.history.push('/')
    }

    render () {
        return  (
            <div className={classes.Error}>
                <h1>Somthing went wrong</h1>
                <h3>Please try again later or contact me directly via aramhd99@gmail.com</h3>
                <Button clicked={this.HomeHandler} error={true}>Home</Button>
            </div>
        )
    }
}

export default Error;