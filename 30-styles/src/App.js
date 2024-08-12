import "./styles/App.css";
import SassComponent from "./SassComponent.js";
import StyledComponent from "./StyledComponent.js";
import CssModuleComponets from "./CssModuleComponents.js";

function App() {
  return (
    <div className="App">
      <SassComponent />
      <hr />

      <StyledComponent />
      <hr />

      <CssModuleComponets />
    </div>
  );
}

export default App;
