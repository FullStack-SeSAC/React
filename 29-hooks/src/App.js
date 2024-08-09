import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMomoEx';

function App() {
  return (
    <>
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 />
    </>

  );
}

export default App;
