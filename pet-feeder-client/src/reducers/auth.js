import { AUTHENTICATED, NOT_AUTHENTICATED } from '../actions'

//set an initial state needed for our reducer. this one is an object consisting of 3 keys
const initialState = {
    authCheck: false, //boolean
    loggedIn: false, //boolean,
    currentUser: {} //object
}

 