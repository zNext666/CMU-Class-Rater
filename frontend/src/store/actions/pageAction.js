export const changePage = (page) =>{
    return (dispatch, getState) => {
        dispatch({
            type:'CHANGE_PAGE', payload: page
        })
    }
}

export const Sort = (sort) =>{
    return (dispatch) => {
        dispatch({
            type:'SORT', payload: sort
        })
    }
}