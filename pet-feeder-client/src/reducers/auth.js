import { AUTHENTICATED, NOT_AUTHENTICATED } from '../actions'

//set an initial state needed for our reducer. this one is an object consisting of 3 keys
const initialState = {
    authCheck: false, //boolean
    loggedIn: false, //boolean,
    currentUser: {} //object
}

// IMPORTANT! This reducer gets functionality by being added to the combineReduer (RootReducer)

 export default function authReducer(state = initialState, action) {
     switch(action.type){
         case AUTHENTICATED: //if this action then update state fully with these values
             return {
                 authCheck: true,
                 loggedIn: true,
                 currentUser: action.payload //payload will be the current_user, userJson in our action
             }
        case NOT_AUTHENTICATED:
            return {
                authCheck: true, //we checked
                loggedIn: false, //not logged in
                currentUser: {} //empty object is returned for user, no user
            }

        default:
            return state;

     }
     

 }