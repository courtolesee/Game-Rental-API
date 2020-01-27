import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// root saga
function* rootSaga() {
    yield takeEvery('SEARCH_GAMES', searchGames);
    yield takeEvery('RENT_GAME', rentGame);
    yield takeEvery('FETCH_RENTALS', fetchRentalList)
}

// saga to search 
function * searchGames (action) {
    try{
      const getSearchResponse = yield axios.get(`/api/bomb/${action.payload}`);
      yield put ({ type: 'GET_SEARCH', payload: getSearchResponse.data})
    }
    catch (error){
      console.log('error getting search:', error);
    }
}

// saga to rent (puts game in database)
function * rentGame (action) {
    try {
      yield axios.post('/api/rent', action.payload);
    }
    catch (error) {
      console.log('error renting game:', error);
    }
}

// saga to get rental list
function * fetchRentalList () {
  try {
    const response = yield axios.get('api/rent/list');
    yield put({ type: 'SET_RENTALS', payload: response.data });
  } 
  catch (error) {
    console.log('error getting rentals:', error);
  }
}

const sagaMiddleware = createSagaMiddleware();

// reducer to search (holds search results)
const searchReducer = (state=[], action) => {
    if(action.type === 'GET_SEARCH'){
      return action.payload;
    }
    return state;
  }

// reducer to hold rentals - (with a switch case rather than if statements likea above)
const rentalsReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_RENTALS': 
      return action.payload
    default: 
      return state;
  }
}

// one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchReducer,
        rentalsReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));


