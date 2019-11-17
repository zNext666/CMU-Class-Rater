export const changePage = (page) =>{
    return (dispatch, getState) => {
        dispatch({
            type:'CHANGE_PAGE', payload: page
        })
    }
}