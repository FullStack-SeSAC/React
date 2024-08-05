import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <>
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
    </>
  );
}

export default App;
