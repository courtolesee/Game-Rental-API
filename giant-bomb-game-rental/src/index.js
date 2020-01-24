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

function* rootSaga() {
    yield takeEvery('SEARCH_GAMES', searchGames);
}

// Saga
// function* getBombSaga( action ) {
//     try {
//         const getResponse = yield axios.get('/api/bomb');
//         yield put({ type: 'SET_BOMB', payload: getResponse.data });
//     }
//     catch (error) {
//         console.log('error with bomb get request', error);
//     }
// }

function * searchGames (action) {
    try{
      console.log('ACTION PAYLOAD-->',action.payload);
      const getSearchResponse = yield axios.get(`/api/bomb/${action.payload}`);
      yield put ({ type: 'GET_SEARCH', payload: getSearchResponse.data})
    }
    catch (error){
      console.log('error getting search:', error);
    }
  }

const sagaMiddleware = createSagaMiddleware();

// Reducer that holds our results
// const bomb = (state = {}, action) => {
//     if(action.type === 'SET_BOMB') {
//         console.log('in bomb reducer', action.payload);
        
//         return action.payload;
//     }
//     return state;
// }

const searchReducer = (state=[], action) => {
    if(action.type === 'GET_SEARCH'){
      return action.payload;
    }
    return state;
  }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));


