import './App.css';
import Button from './Button';
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
      <hr />

      <Button children='Google' link="https://www.google.com" />
    </div>
  );
}

export default App;
