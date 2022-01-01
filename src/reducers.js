
import {
    MAIN_INPUT_CHANGE,
    REQUET_FLIGHTS_PENDING,
    REQUET_FLIGHTS_FAIL,
    REQUET_FLIGHTS_SUCCESS,
    REQUET_COUNTIERS_PENDING,
    REQUET_COUNTIERS_SUCCESS,
    REQUET_COUNTIERS_FAIL
} from "./constents"


const mainInputState = {
    mainInput:''
}

export const mainSearch = (state = mainInputState, action={}) => {
    // console.log(action.type)
    switch(action.type) {
        case MAIN_INPUT_CHANGE:
            return  Object.assign({},state, {mainInput: action.payload})
        default:
            return state
    }
}


const initalStateFlights = {
    isPanding: false,
    flights:[],
    err:''
}

export const requestFlights = (state=initalStateFlights, action={}) => {
    // console.log(action.type)
    switch (action.type) {
        case REQUET_FLIGHTS_PENDING:
           return Object.assign({}, state, {isPanding:true})
        case REQUET_FLIGHTS_FAIL:
            return Object.assign({}, state, {err:action.payload, isPanding:false})
        case REQUET_FLIGHTS_SUCCESS: 
            return Object.assign({}, state , {flights:action.payload, isPanding:false })
        default:
            return state
    }
}


const initalStateCountries = {
    isPanding: false,
    flights:[],
    err:''
}

export const requestCountries = (state=initalStateCountries, action={}) => {
    // console.log(action.type)
    switch (action.type) {
        case REQUET_COUNTIERS_PENDING:
           return Object.assign({}, state, {isPanding:true})
        case REQUET_COUNTIERS_FAIL:
            return Object.assign({}, state, {err:action.payload, isPanding:false})
        case REQUET_COUNTIERS_SUCCESS: 
            return Object.assign({}, state, {flights:action.payload, isPanding:false })
        default:
            return state
    }
}