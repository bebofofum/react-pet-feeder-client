import { 
    SUCCESSFULLY_LOADED_PET_FEEDINGS,
    SUCCESSFULLY_CREATED_FEEDING
 } from '../actions'

 const initialState = {
    petsLoaded: {},
    petFeedingList: []
}

export default function feedingReducer(state=initialState,action) {
    switch(action.type) {
        case SUCCESSFULLY_LOADED_PET_FEEDINGS:
            return {
                petsLoaded: {
                    ...state.petsLoaded, 
                    [action.payload.pet.id]: 'successful'},
                petFeedingList: state.list.concat(action.payload.feedings)

            };
        case SUCCESSFULLY_CREATED_FEEDING:
            return {
                ...state,
                list: state.list.concat(action.payload),
                errors: {}
            };


        default:
            return state;
    }
}