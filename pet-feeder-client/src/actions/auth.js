import { AUTHENTICATED, NOT_AUTHENTICATED } from '.'



//this will be used when we are establishing the token like signup or login
const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).valueOf());
}

//this will be used for requests where we need to find, use or find the token such as logging out?
const getToken = () => {
    const now = new Date(Date.now()).valueOf();
    //weird way of writing 30 minutes--wonder why
    const thirtyMinutes = 1000*60*30
    const sinceLastLogin = now - localStorage.getItem("lastLoginTime")
    if(sinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token")
    }

}

//this first action creator is used for our higher order component to check user jwt
export const checkAuth = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/current_user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken()
            }
        })
        .then(response => {
            if (response.ok) {  //use fancy bracket here because that's how it's written
                return response.json().then(userJson => 
                    dispatch({ 
                        type: AUTHENTICATED,
                        payload: userJson }))
            } else {
                return Promise.reject(dispatch({
                    type: NOT_AUTHENTICATED
                }))
            }
        })
    }
}

//A function for User Signup
//this one is exported so we can use action creators

export const signUpUser = (credentials) => {
    //this returns a function
    return (dispatch) => {
        return fetch("http://localhost:3001/signup", { //returning the fetch returns the promise so we can chain on .then
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: credentials }) //passing what's in our credentials we receive to our user model
        })
        .then(res => {
            if(res.ok) {
                setToken(res.headers.get("Authorization"))
                return res.json()   
            } else {
                return res.json().then(errors => {
                    dispatch({ type: NOT_AUTHENTICATED })
                    return Promise.reject(errors)
                })
            }
        })
        .then(userJson => {
            dispatch({
                type: AUTHENTICATED,
                payload: userJson
            })
        })
    }
}

//And a function for User Login. Also exported

export const userLogin = (credentials) => {
    //this returns a function
    return (dispatch) => {
        return fetch("http://localhost:3001/login", { //returning the fetch returns the promise so we can chain on .then
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ user: credentials })
        })
        .then(res => {
            if(res.ok) {
                setToken(res.headers.get("Authorization")) //if Promise is okay, setToken with header authorization and return the parsed response
                return res.json()
            } else {  //if not chain on errors response with dispatch action.type and return a reject Promise
                return res.json().then(errors => {  //passing return of arrow function as argument
                    dispatch({ type: NOT_AUTHENTICATED })
                    return Promise.reject(errors)
                }) 
            }
        })
        .then(userJson => {
            dispatch({
                type: AUTHENTICATED,
                payload: userJson
            })
        })
    }

}

//And a function for logout. also exported

export const userLogout = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/logout', {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken()
            }
        })
        .then(res => {
            if(res.ok) {  //if response is okay then return the dispatched action
                return dispatch({ type: NOT_AUTHENTICATED })
            } else {  //else parse the response, chain on then, pass in errors
                return res.json().then(errors => {
                    dispatch({ type: NOT_AUTHENTICATED })
                    return Promise.reject(errors)
                }) 
            }
        })
    }
}