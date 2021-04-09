import initialState from './initialState'

export const updateCount = (state, action) => {
    // action looks like this: {type: "ADD_TO_COUNTER", counter: 1}
    // state looks like this: 0
    return state + action.counter
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