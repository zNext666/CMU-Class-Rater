const initState = {
    user:[],
    notify:''
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            sessionStorage.setItem('auth', action.payload.data.username);
            sessionStorage.setItem('uid', action.payload.data.id);
            console.log('login', action.payload.data, sessionStorage.getItem('auth'))
            return {
                user:  action.payload.data,
                notify: action.payload.status
            }
        case 'LOGIN_ERROR':
            console.log('login error', action.payload.data, action.payload.status)
            return {
                ...state,
                user:  action.payload.data,
                notify: action.payload.status
            }
        case 'LOGIN_FACEBOOK':
                console.log('login facebook', action.payload)
                sessionStorage.setItem('auth', action.payload.data.username);
                sessionStorage.setItem('uid', action.payload.data.id);
            return {
                user: action.payload,
                notify: action.payload.status
            }
        default:
            return state
    }
    
}
export default authReducer