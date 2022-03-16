import logo from './logo.svg';
import './App.css';
import FibonacciCalculator from './containers/fibonacciCalculator';
import { FibonacciState } from "./contexts/fibonacci/FibonacciState";

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="headerApp">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FibonacciState>
        <FibonacciCalculator />
      </FibonacciState>
    </div>
  );
}

export default App;
