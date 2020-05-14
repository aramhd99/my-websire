import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let InputElement= null;
    let validationErr = null;
    const InputClasses= [classes.InputElement]

    if (props.invalid && props.touched) {
        InputClasses.push(classes.InputErr);
        validationErr = <p className={classes.errMsg}>This field is required</p>
    }

    switch (props.ElementType) {
        case ('input') : 
        InputElement = <input className={InputClasses.join(' ')} {...props.InputConfig} 
        onChange={props.changed}/> 
        break;
        case ('textarea') : 
        InputElement = <textarea className={InputClasses.join(' ')} {...props.InputConfig} 
        onChange={props.changed}/>
        break;
        default : InputElement = <input {...props.InputConfig} 
        onChange={props.changed}/>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {InputElement}
            {validationErr}
        </div>
    )
}

export default input;