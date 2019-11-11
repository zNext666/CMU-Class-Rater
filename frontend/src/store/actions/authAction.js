import axios from 'axios'

export const Login = (auth) =>{
    return async(dispatch, getState) => {
        const res = await axios.post('http://localhost:8000/api/users/login', auth)
        const data = await res.data
        dispatch({
            type: 'LOGIN', data
        })
    }
}