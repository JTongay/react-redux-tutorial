import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';

import App from './components/App';

const initialState = {
    result: 1,
    lastValues: [],
    userName: "Joey"
};


const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
}

const userReducer = (state = {
    name: "Joey",
    age: 27
}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            };
            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
}

const myLogger = (store)=> (next) => (action) =>{
    console.log("logged action", action);
    next(action)
}

const store = createStore(
    combineReducers(
        {mathReducer, userReducer}), 
        {}, 
        applyMiddleware(createLogger())
    );

store.subscribe(()=>{
    // console.log("store updated!", store.getState());
});

render(<App />, document.getElementById('app'));
