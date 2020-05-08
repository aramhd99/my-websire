import React from 'react';
import Picture from '../Images/aram.jpg';
import classes from './MyPicture.module.css';

const myPicture = (props) => (
    <img className={classes.MyPic}
    height={props.height}
    alt='my portrait'
    src={Picture}
    />
)

export default myPicture;