import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {

    // These case statements could be leaner...but it's overkill for this size of a project
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})} );
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date(), value: action.result})
            // };
        case actionTypes.DELETE_RESULT:
            // Another method to copy state
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            // Returns new copy of array! Immutibile best practice
            //const newResultsArray = state.results.filter(result => true);
            const newResultsArray = state.results.filter((result, index ) => result.id !== action.id );
            return updateObject(state, {results: newResultsArray})

            // return {
            //     ...state,
            //     results: newResultsArray
            // };
        default:
            return state;
    }

};

export default reducer;