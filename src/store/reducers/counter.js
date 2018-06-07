import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INC_COUNTER:
            // Another method to maintain immutability of state
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;

            // Test of Utility f(x)
            return updateObject(state, {counter: state.counter + 1});

            // return {
            //     ...state,
            //     counter: state.counter + 1
            // };
        case actionTypes.DEC_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.amount
            };
        case actionTypes.SUB_COUNTER:
            return {
                ...state,
                counter: state.counter - action.amount
            };
        default:
            return state;
    }

};

export default reducer;