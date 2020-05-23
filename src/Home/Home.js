import React, { Component } from 'react';

import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import MyPic from '../MyPicture/Mypicture';

class Home extends Component {

    ButtonClickedHandler = () => {
        this.props.history.push('/about')    
    }

    render () {
        return (
            <div className={classes.Home}>
                <MyPic height='200px' />
                <h1>Welcome to my official website</h1>
                <h3>My name is <strong>Aram Alhaddad</strong> and, I am a web Devoloper and, a musician</h3>
                <Button clicked={this.ButtonClickedHandler}>Learn More</Button>
            </div>
        );
    }
}
export default Home;