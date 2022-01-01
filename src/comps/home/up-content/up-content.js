
import React from 'react'
import Search from '../search/search'
import './up-content.css'

export default function UpContent(props) {
    // console.log('up-content',props)
    return (
        <div className='upper'>
            <div className='search container '>
                <Search data={props.data}/>
            </div>
        </div>
    )
}
