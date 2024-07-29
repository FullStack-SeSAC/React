import './App.css';
import Larva from './Larva';

function App() {
  const name = 'rani';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  }


  return (
    <>
      {/* 자동 생성 코드 */}

      {/* JSX 문법 */}
      {/* #1. 하나로 감싸인 요소 */}
      {/* 의미 없는 div가 싫다, -- <></> Fragment 문법 사용! */}

      {/* #2. JS 문법 사용
          - {}로 감싸면 JS 표현식 사용 가능
          - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가)
      */}

      <div>{name} 안녕?</div>
      <div>
        {student === 'sesac' ? <span>새싹크루</span> : <span>새싹이 모에요</span>}
      </div>

      {/* #3. 스타일 속성
            - 리액트에서 DOM요소에 스타일 적용시 문자열 X -> 객체 사용!
            - {{스타일명 : '값'}}
            - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성
            - font-size (x) JSX에서는 -는 진짜 빼기임
      */}
      <div style={styles}>스타일 적용</div>
      <div style={{
        background: 'yellow',
        color: 'blue',
        fontSize: '48px',
      }} >
        스타일 적용2
      </div>

      {/* #4. className 사용
          - class 속성이 아닌 className 속성 사용.

          #5. 종료 태그 (closing tag)가 없는 태그 사용
          - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야함
          - <input /> or <input></input>

          #6. 주석
          - // : JSX 외부주석
          - {* *} : JSX 내부 주석
      */}


      <Larva />
    </>
  );
}

export default App;
