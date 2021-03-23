import {
    START_LOADING_OWNERS, 
    SUCCESSFULLY_LOADED_OWNERS,
    SUCCESSFULLY_CREATED_OWNER,
    FAILED_LOADING_OWNERS } from '../actions';

const initialState = {
    loadingOwnerState: "notStarted",
    ownerList: [],
    errors: {}
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
            case SUCCESSFULLY_CREATED_OWNER:
                return {
                    ...state,
                    ownerList: state.ownerList.concat(action.payload),
                    errors: {}
                }

            default:
                return state;

        }

}