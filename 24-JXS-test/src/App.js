import './App.css';

function App() {
  const name = 'rani';
  const animal = 'cat';
  const underlineStyle = { textDecoration: 'underline' };

  const isCorrect = (3 + 5 === 8);

  const a = 3;
  const b = 2;

  const backgroundColor = {backgroundColor: ''};

  return (
    <div className="App">
      <section>
        <h2>제 반려동물의 이름은 <span style={underlineStyle}>{name}</span>입니다.</h2>
        <h2><span style={underlineStyle}>{name}</span>는 <span style={underlineStyle}>{animal}</span>입니다.</h2>
      </section>
      <section>
        <h2>{isCorrect ? '정답입니다' : '오답입니다'}</h2>
      </section>
      <section>
        {a > b && <h2>a가 b보다 큽니다</h2>}
      </section>
      <section>
        <h1 className='Hello-Background'><span style={backgroundColor}>Hello World</span></h1>
        <div>
          아이디:
          <input></input>
        </div>
        <br />
        <div>
          비밀번호:
          <input></input>
        </div>
      </section>
      
    </div>
  );
}

export default App;
