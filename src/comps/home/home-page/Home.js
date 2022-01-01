
import {React, useEffect } from 'react'
import UpContent from '../up-content/up-content'


const Home = (props) => { 

    useEffect(()=>(
        props.getUser()
    ),[props.data])

    // console.log(props)
    return (
        <div>
            <UpContent data={props.data}/>
        </div>
    )
}

export default (Home)