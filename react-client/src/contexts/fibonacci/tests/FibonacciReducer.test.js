import FibonacciReducer from "../FibonacciReducer";

describe('Fibonacci reducer', () => {
  it('returns new state for "SET_LOADING" type', () => {
    const initialState = {
        errorMessage: '',
        fibonacciValue: null,
        loading: false
    };
    const updateAction = {type: 'SET_LOADING', payload: true};
    const updatedState = FibonacciReducer(initialState, updateAction);
    expect(updatedState).toEqual({
        errorMessage: '',
        fibonacciValue: null,
        loading: true
    });
  }); 

  it('returns new state for "SET_FIBONACCI_VALUE" type', () => {
    const initialState = {
        errorMessage: '',
        fibonacciValue: null,
        loading: false
    };
    const updateAction = {type: 'SET_FIBONACCI_VALUE', payload: 8};
    const updatedState = FibonacciReducer(initialState, updateAction);
    expect(updatedState).toEqual({
        errorMessage: '',
        fibonacciValue: 8,
        loading: false
    });
  }); 

  it('returns new state for "SET_ERROR" type', () => {
    const initialState = {
        errorMessage: '',
        fibonacciValue: null,
        loading: false
    };
    const updateAction = {type: 'SET_ERROR', payload: 'Error Message'};
    const updatedState = FibonacciReducer(initialState, updateAction);
    expect(updatedState).toEqual({
        errorMessage: 'Error Message',
        fibonacciValue: null,
        loading: false
    });
  }); 

  it('returns new state for "default" type', () => {
    const initialState = {
        errorMessage: '',
        fibonacciValue: null,
        loading: false
    };
    const updateAction = {type: 'SET', payload: 'Error Message'};
    const updatedState = FibonacciReducer(initialState, updateAction);
    expect(updatedState).toEqual({
        errorMessage: '',
        fibonacciValue: null,
        loading: false
    });
  }); 
});