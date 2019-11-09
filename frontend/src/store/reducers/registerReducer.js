const initState = ''

const registerReducer = (state = initState, action) => {
    switch(action.type){
        case 'REGISTER':
            console.log('register',action.register)
    }
    return state
}
export default registerReducer