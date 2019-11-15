const initState = {
    notify: ''
}

const registerReducer = (state = initState, action) => {
    switch(action.type){
        case 'REGISTER':
            console.log('register', action.payload)
                return {
                    ...state,
                    notify: action.payload
                }
        default:    
            return state
    }
    
}
export default registerReducer