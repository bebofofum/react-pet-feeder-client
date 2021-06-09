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

//this one is export so this will be the action creator used

export const signUpUser = (credentials) => {
    //this returns a function
    return (dispatch) => {
        return fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: credentials })
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