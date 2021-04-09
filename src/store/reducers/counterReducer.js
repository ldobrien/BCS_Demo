import initialState from './initialState'

export const updateCount = (state, action) => {
    return state
}

const counterReducer = (state = initialState.counter, action) => {
    switch(action.type){
        case 'ADD_TO_COUNTER':
            return updateCount(state, action);
        default:
            return state;
    }
}

export default counterReducer;