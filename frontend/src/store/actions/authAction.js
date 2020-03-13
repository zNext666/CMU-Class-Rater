import axios from 'axios'

export const Login = (a) =>{
    return async(dispatch, getState) => {
        let status = 422
        try {
            const res = await axios.post('https://cmuclassrater.engineer/api/users/login', a)
            const data = await res.data
            status = await res.status
            console.log(status)
            dispatch({
                type: 'LOGIN', payload:{data:data,status:status}
            })
        } catch (error) {
            console.log(error, status)
            dispatch({
                type: 'LOGIN_ERROR', payload:{data:error,status:status}
            })
        }
    }
}

export const LoginFacebook = (a) =>{
    return async(dispatch, getState) => {
        let status = 422
        try {
            const res = await axios.post('https://cmuclassrater.engineer/api/users/login/facebook', a)
            const data = await res.data
            status = await res.status
            console.log(status)
            dispatch({
                type: 'LOGIN_FACEBOOK', payload:{data:data,status:status}
            })
        } catch (error) {
            console.log(error, status)
            dispatch({
                type: 'LOGIN_ERROR', payload:{data:error,status:status}
            })
        }
    }
}