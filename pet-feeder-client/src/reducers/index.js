import { combineReducers } from 'redux'
import petsReducer from './pets'

export default combineReducers({
    pets: petsReducer
    
})