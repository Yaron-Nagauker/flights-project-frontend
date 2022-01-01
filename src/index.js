import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
// import { createLogger } from 'redux-logger'
import ThunkMiddleware  from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import { mainSearch, requestFlights, requestCountries } from './reducers'


// const looger = createLogger()
const rootReduser = combineReducers({ mainSearch, requestFlights, requestCountries })
const store = createStore(rootReduser, applyMiddleware(ThunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
