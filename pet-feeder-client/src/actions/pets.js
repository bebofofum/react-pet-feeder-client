import { 
    START_LOADING_PETS, 
    SUCCESSFULLY_LOADED_PETS } from '.';


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