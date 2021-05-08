import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';


const initialState = 'All';


const visibilityFilter = (state = initialState, action) => {

    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.payload.filter
        
        default:
            return state
    }
}

export default visibilityFilter