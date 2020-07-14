import React from 'react';

import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import MyPic from '../MyPicture/Mypicture';

const home = props => {

    const ButtonClickedHandler = () => {
        props.history.push('/about')
    }

    return <div className={classes.Home}>
                <MyPic height='200px' />
                <h1>Welcome to my official website</h1>
                <h3>My name is <strong>Aram Alhaddad</strong>. I am a web developer and a musician.</h3>
                <Button clicked={ButtonClickedHandler}>Learn More</Button>
            </div>
}

export default home;