import { combineReducers } from 'redux';
import LoggedReducer from './isLogged';
import CounterReducer from './CounterReducer';

const rootreducers = combineReducers({
    counterdata:CounterReducer,
    Loggeddata:LoggedReducer
});

export default rootreducers;
