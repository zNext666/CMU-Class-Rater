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
        case 'LOGIN_FACEBOOK':
                console.log('login facebook', action.payload)
                sessionStorage.setItem('auth', action.payload.name);
                sessionStorage.setItem('uid', action.payload.id);
            return {
                user: action.payload,
                loggingIn: true
            }
        default:
            return state
    }
    
}
export default authReducer