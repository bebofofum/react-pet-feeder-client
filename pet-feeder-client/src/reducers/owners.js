import {
    START_LOADING_OWNERS, 
    SUCCESSFULLY_LOADED_OWNERS,
    SUCCESSFULLY_CREATED_OWNER,
    FAILED_LOADING_OWNERS, 
    SUCCESSFULLY_REMOVED_OWNER} from '../actions';

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
            case SUCCESSFULLY_REMOVED_OWNER:
                return {
                    ...state, //hopefully this will take the ownerslist array and return a new array with only owners
                    ownerList: state.ownerList.filter(owner => owner.id !== action.payload),
                    errors: {}   
                }

            default:
                return state;

        }

}