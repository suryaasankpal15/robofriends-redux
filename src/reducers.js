import {CHANGE_SEARCH_FIELD} from './constants.js'

const initailState = {
    searchfield: ''
}

export const searchRobots = (state=initailState,action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state, {searchfield: action.payload});
        default:
            return state;
    }
}