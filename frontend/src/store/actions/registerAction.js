import axios from 'axios'

export const createRegister = (register) =>{
    return (dispatch, getState) => {
        const res = axios.post('http://localhost:8000/api/users/register', register)
        dispatch({
            type: 'REGISTER', register
        })
    }
}