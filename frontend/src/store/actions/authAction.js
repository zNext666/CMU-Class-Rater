import axios from 'axios'

export const Login = (a) =>{
    return async(dispatch, getState) => {
        const res = await axios.post('http://localhost:8000/api/users/login', a)
        const data = await res.data
        const status = await res.status
        console.log(status)
        if(status == 200){
            dispatch({
                type: 'LOGIN', data
            })
        }else{
            dispatch({
                type: 'LOGIN_ERROR', data
            })
        }
    }
}

export const LoginFacebook = (a) =>{
    return async(dispatch, getState) => {
            dispatch({
                type: 'LOGIN_FACEBOOK', payload: a
            })
    }
}