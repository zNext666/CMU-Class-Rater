export const createAuth = (auth) =>{
    return (dispatch, getState) => {
        dispatch({
            type: 'LOGIN', auth
        })
    }
}