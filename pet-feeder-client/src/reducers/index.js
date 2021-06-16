import { combineReducers } from 'redux'
import petsReducer from './pets';
import ownersReducer from './owners';
import feedingReducer from './feedings';
import authReducer from './auth';

export default combineReducers({
    pets: petsReducer,
    owners: ownersReducer,
    feeding: feedingReducer,
    auth: authReducer
})