import { 
    START_LOADING_PETS, 
    SUCCESSFULLY_LOADED_PETS,
    SUCCESSFULLY_CREATED_PET,
 } from '.';


export const createPet = (formData) => {
    return (dispatch) => {
        return fetch("http://localhost:3001/pets", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({pet: formData})
    })
    .then(response => {
        if (response.ok) {
            return response.json()
           } else {
               return response.json().then(errors => Promise.reject(errors))
           }
       })
    .then(petJson => {
            dispatch({
                type: SUCCESSFULLY_CREATED_PET,
                payload: petJson
            })
        })

    }
}


export const fetchPets = () => {
    return(dispatch) => {
        dispatch({type: START_LOADING_PETS})
        fetch("http://localhost:3001/pets", {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(petsJson => {
           dispatch({
               type: SUCCESSFULLY_LOADED_PETS,
               payload: petsJson
            })
        })

    }
}