import logo from './logo.svg';
import './App.css';
import FibonacciCalculator from './containers/fibonacciCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FibonacciCalculator />
    </div>
  );
}

export default App;
