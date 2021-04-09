export const addToCounter = (counter) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_TO_COUNTER',
            counter: counter,
        })
    }
}

export const addToPuppies = (puppy) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_TO_PUPPY',
            puppy: puppy,
        })
    }
}