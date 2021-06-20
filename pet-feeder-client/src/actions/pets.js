import { 
    START_LOADING_PETS, 
    SUCCESSFULLY_LOADED_PETS,
    SUCCESSFULLY_CREATED_PET,
    SUCCESSFULLY_REMOVED_PET
 } from '.';

// our action creator to receive form data and persist it to our api. This returns a promise
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

// our action creator that retrieves all pets from api
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

export const removePet = (petId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/pets/${petId}`, {  //send HTTP DELETE request to api to remove pets/:pet_id. then return message json from controller action
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(messageJson => { //then dispatch action to reducer with type and payload
            dispatch({
                type: SUCCESSFULLY_REMOVED_PET,
                payload: petId
            })
        })
        .catch(error => console.log(error))

    }
}