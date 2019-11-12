const initState = {
    user:[],
    loggingIn:[]
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            sessionStorage.setItem('auth', action.data.username);
            sessionStorage.setItem('uid', action.data.id);
            console.log('login', action.data, sessionStorage.getItem('auth'))
            return {
                user:  action.data,
                loggingIn: true
            }
        case 'LOGIN_ERROR':
            console.log('login error', action.data)
            return state
        default:
            return state
    }
    
}
export default authReducer