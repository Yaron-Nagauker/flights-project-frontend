import { React} from 'react'
import './card-dest.css'
import countryID from '../../../countriesList/countries'


const cardDest = (props) => {
    
    const allCountries = props.data
    
    // console.log('dest-card',allCountries)
    
    const mapCountries = allCountries.map((country, i) => {
        const mapFlag = countryID.filter(flag => {
            // console.log(flag.code)
            if(flag.name.toLocaleLowerCase() === country.name.toLocaleLowerCase()) {
                return flag.code.toLocaleLowerCase()
            } else {
                return null
            }
        })
        return(
            <div className='column is-6' key={i}>
            <div className="card">
                <div className="card-title-dest">
                
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="flag">
                            <img src={`/flags/${mapFlag[0].code}.svg`} alt="flag"/>
                        </figure>
                    </div>
                        <div className="media-content dset">
                            <p className="title is-5">{country.name}</p>
                            <p className="subtitle is-6">country id: {country.id}</p>
                        </div>
                        <div className='34'>
                            <button className='button is-success'>See Flights to <strong>{country.name}</strong></button>
                        </div>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        
                        
                    </div>
                </div>
            </div> 
        </div>
        )
    })

    return (
        mapCountries
    )
}

export default cardDest
