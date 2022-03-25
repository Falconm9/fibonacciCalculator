import axios from "axios";

export const getFibonacciValue = async (dispatch, value) => {  
  dispatch({ type: "SET_LOADING", payload: true})
  await axios
    .get(`http://localhost:8080/fibonacci/${value}`)
    .then(res => {
      const result = res.data.fibonacciNumber;
      return result;
    })
    .catch(error => {
      dispatch({
        type: "SET_ERROR",
        payload: "There was a server problem!"
      });
    })
};

export const getCounter = async (dispatch, value) => {  
  await axios
    .get(`http://localhost:8080/fibonacci/${value}`)
    .then(res => {
      const result = res.data.fibonacciNumber;
      dispatch({
        type: "SET_FIBONACCI_VALUE",
        payload: result
      })
    })
    .catch(error => {
      dispatch({
        type: "SET_ERROR",
        payload: "There was a server problem!"
      });
    })
};
