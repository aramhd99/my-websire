import React, { useState } from 'react';
import axios from 'axios';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Contact.module.css';
import Spinner from '../UI/Spinner/Spinner';

const Contact = props => {
    const [form, setForm] = useState({
            Name: {
                Inputtype: 'input',
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
                Inputtype: 'input',
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
                Inputtype: 'input',
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
                Inputtype: 'input',
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
                Inputtype: 'textarea',
                InputConfig: {
                    rows: '10',
                    placeholder: 'Your Message'
                },
                value: '',
                valid: true,
                }
        })
        const [loading, setLoading] = useState(false)
        const [formIsValid, setFormIsValid] = useState(false)


    const checkValidityHandler = (value, rules) => {
        let isValid = false;
        if (!rules) {
            return true
        }
        if (rules.reqired) {
            isValid = value.trim() !== '' 
        }
        return isValid
    }

    const InputChangedHandler = (event, inputIdentifier) => {
            const updatedForm = {...form}
            const updatedFormElement = {...updatedForm[inputIdentifier]}
            updatedFormElement.value = event.target.value;
            updatedFormElement.touched = true;
            updatedFormElement.valid = checkValidityHandler(updatedFormElement.value, updatedFormElement.validation)
            updatedForm[inputIdentifier] = updatedFormElement
            let formValidation = true 
            for (let inputId in updatedForm) {
                formValidation = updatedForm[inputId].valid && formValidation
            }
            setForm(updatedForm);
            setFormIsValid(formValidation)
        }

    const MessageSendHandler = (event) => {
        event.preventDefault();
        setLoading(true)
        let FormData={};
        for (let formElementId in form) {
            FormData[formElementId] = form[formElementId].value
        } 
        axios.post('https://my-app-6a24c.firebaseio.com/messages.json', FormData)
        .then(response => {
            setLoading(true)
            props.history.push('/thankyou')
            })
        .catch(error =>{
            setLoading(false)
            props.history.push('/error')
        })
    }

        const formElementArr = [];
        for (let key in form) {
            formElementArr.push({
                id: key,
                config: form[key]
            })
        }
        let formContent = (
            <form onSubmit={MessageSendHandler}>
                {formElementArr
                .map(formElement => (
                    <Input key={formElement.id}
                        label={formElement.id}
                        ElementType={formElement.config.Inputtype}
                        InputConfig={formElement.config.InputConfig} 
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        changed={(event) => InputChangedHandler(event, formElement.id)} />
                ))}
                <Button disabled={!formIsValid}>Send</Button>
            </form>
        )
        if (loading) {
            formContent = <Spinner />
        }
        return (
            <div className={classes.ContactForm}>
                <h1>Contact Me</h1>
                {formContent}
            </div>
        )
}

export default Contact;