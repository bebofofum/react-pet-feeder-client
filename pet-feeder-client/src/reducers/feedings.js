import { 
    SUCCESSFULLY_LOADED_PET_FEEDINGS
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

            }

        default:
            return state;
    }
}