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
}

// saga to search 
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

// reducer to search 
const searchReducer = (state=[], action) => {
    if(action.type === 'GET_SEARCH'){
      return action.payload;
    }
    return state;
  }

// one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

