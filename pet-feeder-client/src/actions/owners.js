import { 
    START_LOADING_OWNERS, 
    SUCCESSFULLY_LOADED_OWNERS } from './index';

    export const fetchOwners = () => {
        return(dispatch) => {
            dispatch({type: START_LOADING_OWNERS})
            fetch("http://localhost:3001/owners", {
                method: "get",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((ownersJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_OWNERS,
                    payload: ownersJson
                })
             })
     

        }
    }