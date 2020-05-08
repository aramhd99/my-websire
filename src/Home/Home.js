import React from 'react';

import classes from './Home.module.css';
import Button from '../UI/Button/Button';

const home = () => (
    <div className={classes.Home}>
        <h1>Hello everyone and, wellcome to my official website</h1>
        <h3>My name is <strong>Aram Alhaddad</strong> and, I am a web Devoloper and, a musician</h3>
        <Button>Learn More</Button>
    </div>
);

export default home;