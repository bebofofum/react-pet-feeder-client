import {
    ADD_OWNER, 
    START_LOADING_OWNERS, 
    SUCCESSFULLY_LOADED_OWNERS,
    FAILED_LOADING_OWNERS } from '../actions';

const initialState = {
    loadingOwnerState: "notStarted",
    ownerList: []
}

// IMPORTANT! This reducer gets functionality by being added to the combineReduer (RootReducer)

export default function ownersReducer(state = initialState, 
    action) {
        switch(action.type){
            case START_LOADING_OWNERS:
                return {
                    ...state, 
                    loadingOwnerState: 'inProgress'
                };
            case SUCCESSFULLY_LOADED_OWNERS:
                return {
                    ownerList: action.payload,
                    loadingOwnerState: "successful"
                }

            default:
                return state;

        }

}