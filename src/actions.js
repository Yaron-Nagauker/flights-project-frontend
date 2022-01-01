
import axios from "axios"

import {
    MAIN_INPUT_CHANGE,
    REQUET_FLIGHTS_FAIL,
    REQUET_FLIGHTS_SUCCESS,
    REQUET_FLIGHTS_PENDING,
    REQUET_COUNTIERS_FAIL,
    REQUET_COUNTIERS_PENDING,
    REQUET_COUNTIERS_SUCCESS
} from "./constents"


export const setMainSearch = (text) => {
    console.log(text)
    return {
        type: MAIN_INPUT_CHANGE,
        paylaod: text
    }
}


export const requestFlights = () => (dispatch) => {
    dispatch({type: REQUET_FLIGHTS_PENDING})
    axios.get('http://localhost:8080/ano/flights')
        .then(res => res.json())
        .then(data => dispatch({type:REQUET_FLIGHTS_SUCCESS, paylaod: data}))
        .catch(err => dispatch({type:REQUET_FLIGHTS_FAIL, paylaod: err}))
}


export const requestCountries = (dispatch) => {
    dispatch({type:REQUET_COUNTIERS_PENDING})
    axios.get('http://localhost:8080/ano/countries')
    .then(res => res.json())
    .then(data => dispatch({type:REQUET_COUNTIERS_SUCCESS, paylaod: data}))
    .catch(err => dispatch({type:REQUET_COUNTIERS_FAIL, paylaod: err}))
}

