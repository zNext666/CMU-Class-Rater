const initState = ''

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            state = action.data
            console.log('login', action.data)
    }
    return state
}
export default authReducer