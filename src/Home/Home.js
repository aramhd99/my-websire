import React from 'react';
import { Container, Button } from 'react-bootstrap';

import classes from './Home.module.css';
import MyPic from '../MyPicture/Mypicture';

const home = props => {

    const ButtonClickedHandler = () => {
        props.history.push('/about')
    }

    return <Container className={classes.Home}>
                <MyPic height='200px' />
                <h1>Welcome to my official website</h1>
                <h3>My name is <strong>Aram Alhaddad</strong>. I am a web developer and a musician.</h3>
                <Button variant="success" onClick={ButtonClickedHandler}>Learn More</Button>
            </Container>
}

export default home;