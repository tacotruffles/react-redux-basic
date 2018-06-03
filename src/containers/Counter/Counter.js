import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {

        let storedResults = (
            <ul>
                {this.props.storedResults.map(result => (
                    <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                ))}
            </ul>
        );

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>

                {this.props.storedResults.length ? storedResults : <p>No Results Are Stored.</p>}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INC_COUNTER}),
        onDecrementCounter: () => dispatch({type: actionTypes.DEC_COUNTER}),
        onAddCounter: (amount) => dispatch({type: actionTypes.ADD_COUNTER, amount: amount}),
        onSubtractCounter: (amount) => dispatch({type: actionTypes.SUB_COUNTER, amount: amount}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);