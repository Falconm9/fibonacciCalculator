import React, { useContext, useReducer } from "react";
import { FibonacciContext } from "./FibonacciContext";
import FibonacciReducer from "./FibonacciReducer";

export const useFibonacci = () => {
  const { state, dispatch } = useContext(FibonacciContext);
  return [state, dispatch];
};

export const FibonacciState = ({ children }) => {
  const initialState = {
    fibonacciValue: null,
    errorMessage: '',
    loading: false,
    chronometerValue: 0,
  };

  const [state, dispatch] = useReducer(FibonacciReducer, initialState);

  return (
    <FibonacciContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </FibonacciContext.Provider>
  );
};