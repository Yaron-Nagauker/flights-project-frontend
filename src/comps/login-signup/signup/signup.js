
import {React, useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [inputState, setInputState] = useState(true)
    const [passState, setPassState] = useState(true)
    const [userState, setUserState] = useState(true)
    
    const onChangeEmail = (event) => {
        // console.log(event.target.value.length)
        if (event.target.value.length > 0) {
            setInputState(false)
        } else {
            setInputState(true)
        }
    }

    const onChangeUsername = (event) => {
        // console.log(event.target.value.length)
        if (event.target.value.length > 0) {
            setUserState(false)
        } else {
            setUserState(true)
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

    const btnState = (inputState + passState + userState)

    const onSubmit = (event) => {
        event.preventDefault(event)
        
        const data = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.pass.value
        }
        console.log(data)
    }

    return (
        <div className=' is-flex signup is-justify-content-center' onSubmit={onSubmit}>
            <form className='signup-form is-flex is-flex-direction-column is-align-items-center'>
                <div className="field-signup ">
                    <p className="control has-icons-left mt-6">
                        <input className="input input-user is-medium" type="text" placeholder="Username" onChange={onChangeUsername} id='username'/>
                        <span className="icon is-small is-left">
                            <img src={`/icons/person.svg`} alt='user-icon'></img>
                        </span>   
                    </p>
                    <p className='has-text-white'>Username or company name</p>
                </div>

                <div className="field-signup ">
                    <p className="control has-icons-left mt-6">
                        <input className="input input-email is-medium" type="email" placeholder="Email" onChange={onChangeEmail} id='email'/>
                        <span className="icon is-small is-left">
                            <img src={`/icons/email.svg`} alt='email-icon'></img>
                        </span>   
                    </p>
                    <p className='has-text-white'>Please enter a valid email address</p>
                </div>

                <div className="field-pass">
                    <p className="control has-icons-left mt-6">
                        <input className="input input-pass is-medium" type="password" placeholder="password" onChange={onChangePssword} id='pass'/>
                        <span className="icon is-small is-left">
                            <img src='/icons/password.svg' alt='pass-icon'/>
                        </span>
                    </p>
                    <p className='has-text-white'>Enter a password</p>
                </div>
                    <button className='button submit-signup is-primary is-medium mt-5' disabled={btnState}>signup</button>
                    <p className='to-signup mt-6'>If you already have an account log in <Link to='/login'>here</Link></p>
            </form>  
        </div>
    )
}

export default Signup


