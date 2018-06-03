import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            // Returns new copy of array! Immutibile best practice
            //const newResultsArray = state.results.filter(result => true);
            const newResultsArray = state.results.filter((result, index ) => result.id !== action.id );
            return {
                ...state,
                results: newResultsArray
            };
        default:
            return state;
    }

};

export default reducer;