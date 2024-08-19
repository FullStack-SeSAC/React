import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./styles/Box.css";

function App2() {
  // #7. useSelector 훅 사용, Redux 스토어에서 상태 읽기
  // Redux 상태에서 number 값 선택

  const number = useSelector((state) => state);
  const number2 = useSelector((state) => state.number);
  console.log("number ->", number);
  console.log("number2 ->", number2);

  return (
    <div className="App">
      <h1>React Redux 예제 2</h1>
      <h2>Redux 사용!</h2>
      <Box1 />
    </div>
  );
}

// Box1 컴포넌트
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 : </h2>
      <Box2 />
    </div>
  );
};

// Box2 컴포넌트
const Box2 = () => {
  return (
    <div className="Box2">
      <h2>Box2 : </h2>
      <Box3 />
    </div>
  );
};

// Box3컴포넌트
const Box3 = () => {
  return (
    <div className="Box3">
      <h2>Box3 : </h2>
      <Box4 />
    </div>
  );
};

// Box4 컴포넌트
const Box4 = () => {
  // #8. useDispatch 훅 사용, 액션을 dispatch하는 함수 가져오기
  // - 이 함수 사용해 상태 업데이트!
  //   Redux 상태에서 number 값을 선택, 액션을 디스패치할 준비!
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="Box4">
      <h2>Box4 : {number} </h2>
      <button onClick={() => dispatch({ type: "counter/PLUS" })}>PLUS</button>
      <button onClick={() => dispatch({ type: "counter/MINUS" })}>MINUS</button>
    </div>
  );
};

export default App2;
