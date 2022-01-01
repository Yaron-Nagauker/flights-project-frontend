import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Login = (props) => {

    let nav = useNavigate()

    const User = props.User
    const Login = props.login
    // console.log('login-page',User)
    // console.log('login-page-func',Login)

    const [inputState, setInputState] = useState(true)
    const [passState, setPassState] = useState(true)
    
    const onChangeEmail = (event) => {
        // console.log(event.target.value.length)
        if (event.target.value.length > 0) {
            setInputState(false)
        } else {
            setInputState(true)
        }
    }

    const onChangePssword = (event) => {
        // console.log(event.target.value.length)
        if (event.target.value.length > 0) {
            setPassState(false)
        } else {
            setPassState(true)
        }
    }

    const btnState = (inputState + passState)

    const onSubmit = (event) => {
        event.preventDefault(event)
        const data={
            mail: event.target.email.value,
            pass: event.target.pass.value
        }
        // console.log(data)
        axios.post('http://localhost:8080/ano/login/', data)
            .then(res => {
                User.isLoged = true
                localStorage.setItem('User' ,JSON.stringify(User)) 
                Login()
                nav('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <div className='is-flex login is-justify-content-center' onSubmit={onSubmit} >
            <form className='login-form is-flex is-flex-direction-column is-align-items-center' >
                <div className="field-login ">
                    <p className="control has-icons-left mt-6">
                        <input className="input input-email is-medium" type="email" placeholder="Email" id='email' onChange={onChangeEmail}  required/>
                        <span className="icon is-small is-left">
                            <img src={`/icons/email.svg`} alt='email-icon' ></img>
                        </span>     
                    </p>
                    <p className='has-text-white'>Please enter a valid email address</p>
                </div>
                <div className="field-pass">
                    <p className="control has-icons-left mt-6">
                        <input className="input input-pass is-medium" type="password" placeholder="Password" id='pass' onChange={onChangePssword}  required/>
                        <span className="icon is-small is-left">
                            <img src='/icons/password.svg' alt='pass-icon' />
                        </span>
                    </p>
                    <p className='has-text-white'>Enter a password</p>
                </div>
                <button className= 'button submit-login is-info is-medium mt-5' type='submit' id='login-btn' disabled={btnState} >
                    login
                </button>
                <p className='to-signup mt-6'>If you are not yet registered please sign up <Link className='inline-link' to='/signup'>here</Link></p>
            </form>   
        </div>
    )
}

export default Login