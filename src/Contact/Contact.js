import React, { Component } from 'react';
import axios from 'axios';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Contact.module.css';
import Spinner from '../UI/Spinner/Spinner';

class Contact extends Component {
    state = {
        contactData: {
            Name: {
                Inputtype:'input',
                InputConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },
            Email: {
                Inputtype:'input',
                InputConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail',
                },
                value: ''
            },
            Phonenumber: {
                Inputtype:'input',
                InputConfig: {
                    type: 'number',
                    placeholder: 'Your PhoneNumber'
                },
                value: ''
            },
            Message: {
                Inputtype:'textarea',
                InputConfig: {
                    rows: '10',
                    placeholder: 'Your Message'
                },
                value: ''
            }
        },
        Loading: false,
    }

    InputChangedHanler = (event, inputIdentifier) => {
            const updatedForm = {
                ...this.state.contactData
            }
            const updatedFormElement = {...updatedForm[inputIdentifier]}
            updatedFormElement.value = event.target.value;
            updatedForm[inputIdentifier] = updatedFormElement
            this.setState({contactData: updatedForm})
        }

    MessageSendHandler = (event) => {
        event.preventDefault();
        this.setState({Loading:true})
        let FormData=[];
        for (let formElementId in this.state.contactData) {
            FormData[formElementId] = this.state.contactData[formElementId].value
        } 
        axios.post('https://my-app-6a24c.firebaseio.com/messages.json', FormData)
        .then(response => {
            console.log(response)
            this.setState({Loading:false});
            this.props.history.push('/thankyou')
            console.log(FormData)
            })
        .catch(error =>{
            this.setState({Loading:false});
            this.props.history.push('/error')
        })
    }

    render () {
        const formElementArr = [];
        for (let key in this.state.contactData) {
            formElementArr.push({
                id: key,
                config: this.state.contactData[key]
            })
        }
        let form = (
            <form onSubmit={this.MessageSendHandler}>
                {formElementArr
                .map(formElement => (
                    <Input key={formElement.id}
                        ElementType={formElement.config.Inputtype}
                        InputConfig={formElement.config.InputConfig} 
                        value={formElement.config.value}
                        changed={(event) => this.InputChangedHanler(event, formElement.id)}/>
                ))}
                <Button>Send</Button>
            </form>
        )
        if (this.state.Loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactForm}>
                <h1>Contact Me</h1>
                {form}
            </div>
        )
    }
}

export default Contact;