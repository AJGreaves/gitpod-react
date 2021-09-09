import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Matt" age="42"/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="Anna"/>
      <StatefulGreetingWithCallback greeting="I'm a stateful class component with a callback!" name="Simon" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component with prev state!" name="Jo" />
    </div>
  );
}

export default App;
