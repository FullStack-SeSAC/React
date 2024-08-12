import './App.css';
import Faq from './components/Faq';
import Form from './components/react-hook-form/Form';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './components/useTitle';

function App() {
  useTitle('React Hooks  학습중');
  return (
    <>
      {/* <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={5} />
      <hr />
      <Faq />
      <hr />

      <UseReducerEx />
      <hr /> */}

      <Form />
    </>

  );
}

export default App;
