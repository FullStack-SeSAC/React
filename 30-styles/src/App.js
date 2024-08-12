import "./styles/App.css";
import SassComponent from "./SassComponent.js";
import StyledComponent from "./StyledComponent.js";

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <SassComponent />
      <hr />

      <StyledComponent />
    </div>
  );
}

export default App;
