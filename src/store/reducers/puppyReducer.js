import initialState from './initialState'

export const updatePuppies = (state, action) => {
    // do something to update the state here
    return state
}

const puppyReducer = (state = initialState.puppies, action) => {
    switch(action.type){
        case 'ADD_TO_PUPPY':
            return updatePuppies(state, action);
        default:
            return state;
    }
}

export default puppyReducer;