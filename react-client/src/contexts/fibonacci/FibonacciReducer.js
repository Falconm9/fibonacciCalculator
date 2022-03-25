const FibonacciReducer =(state, action) => {
  switch (action.type) {
    case "SET_FIBONACCI_VALUE":
      return {
        ...state,
        fibonacciValue: action.payload,
        loading: false
      };
    case "SET_COUNTER":
      return {
        ...state,
        fibonacciValue: action.payload,
        chronometerValue: state.chronometerValue++
      };
    case "SET_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
        errorMessage: '',
        fibonacciValue: null
      };
    default:
      return state;
    }
  };

export default FibonacciReducer