import { combineReducers } from 'redux';
import todos from './todosReducer';
import  visibilityFilter from './filterReducer';




export const rootReducer = combineReducers({
    todos,
    visibilityFilter 
})