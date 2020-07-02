import React from 'react';
import { Redirect } from 'react-router-dom';

import classes from './ThankYou.module.css';
import Button from '../UI/Button/Button';

const thankYou = props => {
    const ClickedHandler = () => (
        <Redirect to='/' />
    )

        return (
            <div className={classes.ThankYou}>
                <h1>Thank you for contacting me</h1>
                <h3>I will reach you as soon ass possible</h3>
                <Button clicked={ClickedHandler}>Home</Button>
            </div>
        )
}

export default thankYou;