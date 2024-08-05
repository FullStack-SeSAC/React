import './App.css'
import BookComponent from './bookComponent'

function App() {


  return (
    <>
        <h1 className='header'>이번주 베스트셀러</h1>
        <BookComponent
          title="나의 하루는 4시 40분에 시작된다"
          author="김유진"
          price={13500}
          type="자기계발서"
        />
    </>
  )
}

export default App
