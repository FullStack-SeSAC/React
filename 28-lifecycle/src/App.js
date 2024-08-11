import './App.css';
import LifeCycleClass from './component/LifeCycleClass';
import LifeCycleFunc from './component/LifeCycleFunc';
import LifeCycleFuncChild from './component/LifeCycleFuncChild';
import Ref1 from './component/Ref1';
import Ref2 from './component/Ref2';
import Ref3 from './component/Ref3';
import Ref4 from './component/Ref4';

function App() {
  return (
    <>
      <Ref1 />
      <hr />

      <Ref2 />
      <hr />

      <Ref3 />
      <hr />

      <Ref4 />
      <hr />

      {/* <LifeCycleClass /> */}

      <LifeCycleFunc />

      <LifeCycleFuncChild />

    </>
  );
}

export default App;
