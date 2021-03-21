import {
    ADD_PET, 
    START_LOADING_PETS, 
    SUCCESSFULLY_LOADED_PETS,
    FAILED_LOADING_PETS } from '../actions';

const initialState = {
    loadingState: "notStarted",
    list: []
}

// IMPORTANT! This reducer gets functionality by being added to the combineReduer (RootReducer)

export default function petsReducer(state = initialState, 
    action) {
        switch(action.type){
            case START_LOADING_PETS:
                return {
                    ...state, 
                    loadingState: 'inProgress'
                };
            case SUCCESSFULLY_LOADED_PETS:
                return {
                    loadingState: 'successful',
                    list: action.payload
                }
            default:
                return state;
        }
   

}