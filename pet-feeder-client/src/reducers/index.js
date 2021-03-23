import { combineReducers } from 'redux'
import petsReducer from './pets';
import ownersReducer from './owners';
import feedingReducer from './feedings';

export default combineReducers({
    pets: petsReducer,
    owners: ownersReducer,
    feeding: feedingReducer
})