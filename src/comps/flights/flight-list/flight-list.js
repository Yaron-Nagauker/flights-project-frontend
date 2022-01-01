

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './flight-list.css'
import Swal from 'sweetalert2'


const FlightList = (props) => {

    const nav = useNavigate()

    const User = props.User
    console.log('dest-csrd',User)

    const onBuy = () => {
        if(User.isLoged) {
            Swal.fire({
                title: 'Do you want to buy the ticket now?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'buy now',
                denyButtonText: `Save for later`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    let timerInterval
                    Swal.fire({
                      title: 'Please wait....',
                      timer: 2000,
                      timerProgressBar: true,
                      didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        }, 100)
                      },
                      willClose: () => {
                        clearInterval(timerInterval)
                      }
                    }).then((result) => {
                      /* Read more about handling dismissals below */
                      if (result.dismiss === Swal.DismissReason.timer) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The purchase process is complete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                      }
                    })
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to be logged in !',
                footer: '<NavLink to="/singup">Or sign up to open an account</NavLink>'
              })
            nav('/login')
        }
    }

    const [...data] = props.data

    const onChangeSearch = () => {

    }

    
    // console.log(data)

    const mapFlights = data.map((flight, i) => {
        return (<div className='column is-4' key={i}>
                <div className="card">
                    <header className="card-header flight-card">
                        <p className="card-header-title">
                            flight No: {flight.id}
                        </p>
                        <button className="delete is-large" aria-label="more options">
                            
                        </button>
                        <p></p>
                    </header>
                <div className="card-content is-flex">
                    <div className="content">
                    <div className='from-to is-flex is-align-content-center'>
                        <strong>from: </strong> {flight.origin_country_id}
                        <span className='arrow'></span> <strong>to: </strong> {flight.destination_country_id}
                    </div>
                    <br/>
                    <span dateTime="2016-1-1"><strong>Departure:</strong> {flight.departure_time}</span>
                    <br/>
                    <strong>Remaining Tickets: </strong> {flight.remaining_tickets} <br/>
                    
                    </div>
                </div>
                <footer className="card-footer">
                    <div className='buttons has-addons'>
                        <button className="card-footer-item button is-link" onClick={onBuy}>buy now</button>
                        <button  className="card-footer-item button is-success" >Save</button> 
                    </div>      
                </footer>
            </div>  
        </div>)
    })

    return (
        (mapFlights)
    )
}

export default FlightList