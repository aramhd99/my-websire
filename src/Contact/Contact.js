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
                    placeholder: 'Your Name*'
                },
                value: '',
                validation: {
                    reqired: true
                },
                valid: false,
                touched: false,
            },
            Email: {
                Inputtype:'input',
                InputConfig: {
                    type: 'email',
                    placeholder: 'Your Email*',
                },
                value: '',
                validation: {
                    reqired: true
                },
                valid: false,
                touched: false,
            },
            Phonenumber: {
                Inputtype:'input',
                InputConfig: {
                    type: 'number',
                    placeholder: 'Your PhoneNumber*'
                },
                value: '',
                validation: {
                    reqired: true
                },
                valid: false,
                touched: false,
            },
            Subject: {
                Inputtype:'input',
                InputConfig: {
                    type: 'text',
                    placeholder: 'Subject*'
                },
                value: '',
                validation: {
                    reqired: true
                },
                valid: false,
                touched: false,
            },
            Message: {
                Inputtype:'textarea',
                InputConfig: {
                    rows: '10',
                    placeholder: 'Your Message'
                },
                value: '',
                valid: true,
            }
        },
        Loading: false,
        formIsValid: false,
    }

    checkValidityHandler(value, rules) {
        let isValid = false;
        if (!rules) {
            return true
        }
        if (rules.reqired) {
            isValid = value.trim() !== '' 
        }
        return isValid
    }

    InputChangedHanler = (event, inputIdentifier) => {
            const updatedForm = {
                ...this.state.contactData
            }
            const updatedFormElement = {...updatedForm[inputIdentifier]}
            updatedFormElement.value = event.target.value;
            updatedFormElement.touched = true;
            updatedFormElement.valid = this.checkValidityHandler(updatedFormElement.value, updatedFormElement.validation)
            updatedForm[inputIdentifier] = updatedFormElement
            let formValidation = true 
            for (let inputId in updatedForm) {
                formValidation = updatedForm[inputId].valid && formValidation
            }
            this.setState({contactData: updatedForm, formIsValid:formValidation})
        }

    MessageSendHandler = (event) => {
        event.preventDefault();
        this.setState({Loading:true})
        let FormData={};
        for (let formElementId in this.state.contactData) {
            FormData[formElementId] = this.state.contactData[formElementId].value
        } 
        axios.post('https://my-app-6a24c.firebaseio.com/messages.json', FormData)
        .then(response => {
            this.setState({Loading:false});
            this.props.history.push('/thankyou')
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
                        label={formElement.id}
                        ElementType={formElement.config.Inputtype}
                        InputConfig={formElement.config.InputConfig} 
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        changed={(event) => this.InputChangedHanler(event, formElement.id)}/>
                ))}
                <Button disabled={!this.state.formIsValid}>Send</Button>
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