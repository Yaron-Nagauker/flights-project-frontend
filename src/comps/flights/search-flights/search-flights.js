

import React from 'react'
import './search-flights.css'
import FlightList from '../flight-list/flight-list'
import axios from 'axios'
import {useState, useEffect } from 'react'



const SearchFlights = (props) => {

    const User = props.User
    const [Countries, setCountries] = useState([])
    const [allFlights, setAllFlights] = useState([])

    useEffect((allFlights)=> {
        axios.get('http://localhost:8080/ano/countries')
        .then(res=>{
            setCountries(res.data)
        })
        axios.get('http://localhost:8080/ano/flights')
        .then(res => {
            setAllFlights(res.data)
        })
        console.log(allFlights)
    },[])

    const countryList = Countries.map((item) =>{
        // console.log(item.name)
        return(
            <option key={item.id}>{item.name}</option>
        )
    })

    const onChangeSearch = (event) => {
        console.log(event.target.value)
        const filterFlights = allFlights.filter((flight,i)=>{
            
        })
    }

    return (
        <div className='flights-page is-flex-direction-rows is-justify-content-center'>
            <div className="flight-search  is-justify-content-center ">
                <div className='search-title-flight'>Search for a flight by destination</div>
                <input className="input flight-search is-link" onChange={onChangeSearch} type="text" placeholder="" id='flight-search' list='country-list'/>
                <datalist id='country-list'>
                    {countryList}
                </datalist>
                <button className='button flight-search is-med is-info' id='submit-btn' type='submit'>submit</button>
            </div>
            <div className='flights-items'>
                <section className='flights-section'>
                    <div className='flights-scroll'>
                        <div className="columns is-12 is-multiline is-flex">
                            <FlightList data = {allFlights} User={User}/>
                        </div>
                    </div>
                </section>  
            </div>  
        </div>
    )
}

export default SearchFlights