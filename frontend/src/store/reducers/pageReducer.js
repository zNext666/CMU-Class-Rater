const initState = {
    page:1,
    sort:''
}

const pageReducer = (state = initState, action) => {
    switch(action.type){
        case 'CHANGE_PAGE':
            console.log('change page',action)
            return {
                page: action.payload
            }
        case 'SORT':
            console.log('sort', action)
            return {
                sort: action.payload,
                page: 1
            }
        default:
            return state
    }
}

export default pageReducer