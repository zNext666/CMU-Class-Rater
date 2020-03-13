import axios from 'axios'

export const createRegister = (register) =>{
    return async(dispatch, getState) => {
        let status = 422
        try {
            const res = await axios.post('https://cmuclassrater.engineer/api/users/register', register)
            console.log(res.data)
            status = await res.status
            dispatch({
                type: 'REGISTER', payload: status
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'REGISTER_ERROR', payload: status
            })
        }
    }
}