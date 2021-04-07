import {
    SUCCESSFULLY_CREATED_FEEDING
 } from '.';

 export const createFeeding = (formData) => {
     return(dispatch) => {
        return fetch("http://localhost:3001/feedings", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({feeding: formData})
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then(errors => Promise.reject(errors))
            }
        })
        .then(feedingJson => {
            dispatch({
                type: SUCCESSFULLY_CREATED_FEEDING,
                payload: feedingJson
            })

        })


     }
 }
