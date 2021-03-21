import { combineReducers } from 'redux'
import petsReducer from './pets'
import ownersReducer from './owners'

export default combineReducers({
    pets: petsReducer,
    owners: ownersReducer
})