import { 
    START_LOADING_OWNERS, 
    SUCCESSFULLY_LOADED_OWNERS,
    SUCCESSFULLY_CREATED_OWNER,
    ERROR_CREATING_OWNER
 } from './index';


 export const createOwner = (formData) => {
     return (dispatch) => {
         return fetch("http://localhost:3001/owners", {
             method: "post",
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'   
             },
             body: JSON.stringify({owner: formData})
         })
         .then(response => response.json())
         .then(ownerJson => {
             dispatch({
                 type: SUCCESSFULLY_CREATED_OWNER,
                 payload: ownerJson
             })
         })
         .catch(errors => {
             dispatch({
                 type: ERROR_CREATING_OWNER,
                 payload: errors
             })
         })
     }
 }

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