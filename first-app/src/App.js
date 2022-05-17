import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
import Answer1,{Answer2} from "./component/Answer1";
function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Answer1 from="Aman"></Answer1>
      <Answer2></Answer2>
    </div>
  );
}

export default App;
