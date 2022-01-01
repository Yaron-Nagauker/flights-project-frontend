import { Component } from 'react';
import { connect} from 'react-redux'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './comps/navbar/navbar';
import Footer from './comps/footer/footer'
import Home from './comps/home/home-page/Home';
import Login from './comps/login-signup/login/login';
import Signup from './comps/login-signup/signup/signup';
import SearchFlights from './comps/flights/search-flights/search-flights';
import AllDestinations from './comps/destentions/All-destinations/All-destinations';


import { setMainSearch, requestFlights, requestCountries } from '../src/actions'

const mapStateToProps = (state) => {
  return {
    mainInput: state.mainSearch.mainInput,
    Flights: state.requestFlights.Flights,
    isPendingflights: state.requestFlights.isPending,
    errorflights: state.requestFlights.error,
    Countries: state.requestCountries.Countries,
    isPendingCountries: state.requestCountries.isPending,
    errorCountries: state.requestCountries.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(setMainSearch(event.target.value)),
    onrequestFlights: () => dispatch(requestFlights()),
    onrequestCountries: () => dispatch(requestCountries())
  } 
}


class App extends Component{
  constructor() {
    super()

    this.state = {
      User: {
        isLoged: false,
        roll: null
      }
    }

    this.getUserStatus = () => {
      const UserStatus = localStorage.getItem('User')
      // console.log('get-item',UserStatus)
      const LocalData = JSON.parse(UserStatus)
      // console.log('pars',LocalData)
      if(LocalData === null) {
        return
      } else {
        this.setState({
            isLoged: LocalData.isLoged,
            roll: LocalData.roll
        })
      }
    }

    this.LogIn = () => {
      this.setState({
        isLoged:true,
      })
    }

    this.LogOut = () => {
      localStorage.setItem('User' ,JSON.stringify('User')) 
      // console.log(this.state.User)
      this.setState({
        isLoged: false
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar User={this.state.User} logout={this.LogOut}/>  
            <Routes>        
              <Route exact path='/' element={<Home data={this.props.onInputChange} getUser={this.getUserStatus}/>}/>
              <Route exact path='/login' element={<Login  User={this.state.User} login={this.LogIn}  />}/>
              <Route exact path='/signup' element={<Signup/>}/>
              <Route exact path='/flights' element={<SearchFlights User={this.state.User}/>}/>
              <Route exact path='/destinations' element={<AllDestinations />}/>
            </Routes> 
          <Footer/>
        </div>
      </BrowserRouter>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
