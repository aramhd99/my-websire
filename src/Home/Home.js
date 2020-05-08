import React from 'react';

import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import MyPic from '../MyPicture/Mypicture';

const home = () => (
    <div className={classes.Home}>
        <MyPic height='300px' />
        <h1>Wellcome to my official website</h1>
        <h3>My name is <strong>Aram Alhaddad</strong> and, I am a web Devoloper and, a musician</h3>
        <Button>Learn More</Button>
    </div>
);

export default home;