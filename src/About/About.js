import React from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';

import classes from './About.module.css';

const about = props => {
   

    return (
        <div className={classes.About}>
            <h1>About Me</h1>
            <p>My name is Aram Jareer Alhaddad. I Was born on the 25th of september 1999 in Jordan, and my goal is to gain ground on which I would build my experience as a web developer in a professional environment
                while using the latest and greatest methods, and technologies available.</p>
            <p>I am a Front-End Web Developer with ReactJs, React Router, Redux, React Hocks.</p>
            <p>I am a musician, I play piano since I was 10 years old.</p>
            <ButtonGroup  size="lg" className="mb-2">
                <Button variant="success" onClick={socalMedia('/github')}>GitHub</Button>
                <Button variant="success" onClick={socalMedia('/linkedin')}>LinkedIn</Button>
                <Button variant="success" onClick={socalMedia('/facebook')}>Facebook</Button>
            </ButtonGroup>
        </div>
    )
}


export default about;