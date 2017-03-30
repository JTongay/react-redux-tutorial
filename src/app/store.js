import { createLogger } from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'

import math from './reducers/mathReducer';
import user from './reducers/userReducer';

export default createStore(
    combineReducers({
        math, 
        user
        }), 
        {}, 
        applyMiddleware(createLogger())
    );
