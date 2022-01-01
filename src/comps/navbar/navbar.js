
import React from 'react'
import './navbar.css'
// import { useState, } from 'react'
import { NavLink } from 'react-router-dom'




export default function NavBar(props) {

    // console.log('nav',props.User)
    // console.log('nav',props.logout)

    const onLogOut = () => {
        props.logout()
    }

    const User = props.User
    return (
        <div>
            <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item " to='/' >
                    <h1 className='title is-2 has-text-white'>FLIGHTS.COM</h1>
                </NavLink>
                <p role="button" className="navbar-burger has-text-white"  aria-label="menu" aria-expanded='false' data-target="navbarBasicExample" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>
            <div id="navbarBasicExample" className='navbar-menu'>
                <div className="navbar-end" >
                <NavLink className="navbar-item title is-4 flight-link " to='/flights'>
                    Flights
                </NavLink>
                <NavLink className="navbar-item title is-4 destentions-link " to='/destinations' >
                    Destentions
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                    <NavLink className="navbar-link title is-4 More-link" to='/'>
                        More
                    </NavLink>
                    <div className="navbar-dropdown">
                        <NavLink className="navbar-item" to=''>
                            About
                        </NavLink>
                        <NavLink className="navbar-item" to=''>
                            Jobs
                        </NavLink>
                        <NavLink className="navbar-item" to=''>
                            Contact
                        </NavLink>
                        <hr className="navbar-divider"/>
                        <NavLink className="navbar-item" to=''>
                            Report an issue
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                { User.isLoged ? <div className='buttons'>
                    <NavLink className='' to="">
                        <img src='/icons/person.svg' className='user'  alt='user'></img>
                    </NavLink>
                    <button className="button is-warning logout" type='submit' onClick={onLogOut}>
                        <a href='/' style={{color:'white'}}>log out</a>
                    </button>
                </div>:
                <div className="buttons">
                        <NavLink className="button is-danger" to='/signup'>
                            Sign up
                        </NavLink>
                        <NavLink className="button is-primary" to='/login'>
                            Log in
                        </NavLink>
                    </div> }
                </div>
            </div>
        </div>
    </nav>   
    </div>
    )
}
