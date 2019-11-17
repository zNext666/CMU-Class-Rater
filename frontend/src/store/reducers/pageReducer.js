const initState = {
    page:1
}

const pageReducer = (state = initState, action) => {
    switch(action.type){
        case 'CHANGE_PAGE':
            console.log('change page',action)
            return {
                page: action.payload
            }
        default:
            return state
    }
}

export default pageReducer