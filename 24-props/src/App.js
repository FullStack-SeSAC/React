import './App.css';
import ClassComponent from './classComponent.';
import FunctionComponent from './FunctionComponent';


function App() {
  return (
    <div className = 'App'>
      <ClassComponent />
      <ClassComponent name='Ranikun' />
      <hr />


      <FunctionComponent  />
      <FunctionComponent name = 'Ranikun' />
    </div>
  );
}

export default App;
