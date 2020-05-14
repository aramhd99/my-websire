import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let css = classes.Button
    if (props.error) {
        css = classes.Red
    }

    return (
        <button className={css}
            disabled={props.disabled}
            onClick={props.clicked}>
                {props.children}</button>
    )
}

export default button;