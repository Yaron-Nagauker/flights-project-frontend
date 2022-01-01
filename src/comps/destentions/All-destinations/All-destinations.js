import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './All-destinations.css'
import CardDest from '../card-dest/card-dest'
import axios from 'axios'

const AllDestinations = () => {

    let nav = useNavigate()
    
    const [Countries, setCountries] = useState([])

    useEffect((Countries)=>{
        axios.get('http://localhost:8080/ano/countries')
        .then(res => {
            setCountries(res.data)
        })
        // console.log(Countries)
    }, [])

    const onSearch = (event) => {
        event.preventDefault(event)
        nav('/signup')
    }
    
    return (
        <div className='dest-page is-flex-direction-rows is-justify-content-center'>
                <div className="dest-search  is-justify-content-center ">
                    <div className='search-title-dest'>Look for destinations</div>
                    <input className="input flight-search is-link" type="text" placeholder="" id='flight-search'/>
                    <button className='button flight-search is-med is-info' id='submit-btn' type='submit' onClick={onSearch}>Search</button>
                </div>
            <div className='dest-items'>
                <section className='section-dset'>
                    <div className='dest-scroll'>
                        <div className="columns is-12 is-multiline is-flex">
                            <CardDest data={Countries}/>  
                        </div>
                    </div>
                </section>  
            </div>  
        </div>
    )
}

export default AllDestinations
