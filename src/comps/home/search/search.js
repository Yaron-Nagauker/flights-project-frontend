
import React from 'react'
import './search.css'
import axios from 'axios'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Search(props) {

    const nav = useNavigate()

    const [Countries, setCountries] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/ano/countries')
        .then(res=>{
            // console.log(res.data)
            setCountries(res.data)
        })
        // console.log(Countries)
    },[])

    const countryList = Countries.map((item) =>{
        // console.log(item.name)
        return(
            <option key={item.id}>{item.name}</option>
        )
    })

    const onSubmit = (event) => {
        event.preventDefault(event)
        const country = { name:event.target.input.value }
        console.log(country)
        nav('/flights')
    }  

    
    
    return (
        <div className='main-searh' onSubmit={onSubmit}>
            <form>
                <input className="input main-searh is-focused is-medium" id='input' type="text" placeholder="" onChange={props.data} list='country-list'></input>
                <datalist id='country-list'>
                    {countryList}
                </datalist>
                <button className='button main-searh is-medium is-link' id='submit-btn' type='submit' >submit</button>
            </form>   
        </div>
    )
}
