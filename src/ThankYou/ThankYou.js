import React, { Component } from 'react';

import classes from './ThankYou.module.css';
import Button from '../UI/Button/Button';

class ThankYou extends Component {
    ClickedHandler = () => {
        this.props.history.push('/')
    }

    render () {
        return (
            <div className={classes.ThankYou}>
                <h1>Thank you for contacting me</h1>
                <h3>I will reach you as soon ass possible</h3>
                <Button clicked={this.ClickedHandler}>Home</Button>
            </div>
        )
    }
}

export default ThankYou;