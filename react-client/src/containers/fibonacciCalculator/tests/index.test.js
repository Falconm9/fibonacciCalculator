import { render, screen, fireEvent } from '@testing-library/react';
import { FibonacciState } from "../../../contexts/fibonacci/FibonacciState";
import FibonacciCalculator from '../index';
import { getFibonacciValue } from "../../../contexts/fibonacci/FibonacciActions";

jest.mock("../../../contexts/fibonacci/FibonacciActions"); 

describe('Fibonacci calculator', () => {
  test('renders components', () => {
    render(
        <FibonacciState>
            <FibonacciCalculator />
        </FibonacciState>
    );

    const fibonacciTitle = screen.getByTestId("fiboTitle");
    const fibonacciInput = screen.getByTestId("fiboInput");
    const fibonacciButton = screen.getByTestId("fiboButton");

    expect(fibonacciTitle).toBeInTheDocument();
    expect(fibonacciInput).toBeInTheDocument();
    expect(fibonacciButton).toBeInTheDocument();
  });

  test('renders function handleOnClick', async () => {
    render(
        <FibonacciState>
            <FibonacciCalculator />
        </FibonacciState>
    );

    const fibonacciTitle = screen.getByTestId("fiboTitle");
    const fibonacciInput = screen.getByTestId("fiboInput");
    const fibonacciButton = screen.getByTestId("fiboButton");

    expect(fibonacciTitle).toBeInTheDocument();
    expect(fibonacciInput).toBeInTheDocument();
    expect(fibonacciButton).toBeInTheDocument();

    fireEvent.change(fibonacciInput, {target: { value: 5}});
    expect(fibonacciInput.value).toBe("5");
    
    fireEvent.click(fibonacciButton);
    
    expect(getFibonacciValue).toHaveBeenCalledTimes(1);
  });

  test('renders function handleChange string on input', () => {
    render(
        <FibonacciState>
            <FibonacciCalculator />
        </FibonacciState>
    );

    const fibonacciInput = screen.getByTestId("fiboInput");

    expect(fibonacciInput).toBeInTheDocument();

    fireEvent.change(fibonacciInput, {target: { value: "test"}});
    expect(fibonacciInput.value).toBe("");
    

  });

});
