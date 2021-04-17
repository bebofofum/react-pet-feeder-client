import { 
    START_LOADING_OWNERS, 
    SUCCESSFULLY_LOADED_OWNERS,
    SUCCESSFULLY_CREATED_OWNER,
    SUCCESSFULLY_REMOVE_OWNER
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
         .then(response => {
             if (response.ok) {
                 return response.json()
                } else {
                    return response.json().then(errors => Promise.reject(errors))
                }
            })
         .then(ownerJson => {
             dispatch({
                 type: SUCCESSFULLY_CREATED_OWNER,
                 payload: ownerJson
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