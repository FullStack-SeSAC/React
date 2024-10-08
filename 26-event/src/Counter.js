import React, {useState} from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
    }



    // 인자 1개
    const alertMsg = (msg) => {
        alert(`${msg} ~ 현재 숫자는 ${num}입니다.`)
    }

    // 인자 2개
    const consoleMsg = (e, msg) => {
        console.log(e.target);
        console.log(`${msg} ~ 현재 숫자는 ${num}입니다.`);
    }

    // e.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식의 요소
    // e.currentTarget은 이벤트 핸들러가 있는 요소

    const handleEvent = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
    }
  return (
    <div>
        <h1>Number Counter</h1>
        <h2>{num}</h2>

        {/* 함수에 인자가 없는 경우 */}
        <button onClick={increase}>더하기</button>

        {/* 함수에 인자 보내기 */}
        <button onClick={() => {
            alertMsg('hello!')
        }}>안녕</button>

        {/* 함수에 인자 2개 보내기 */}
        <button onClick={(e) => {
            consoleMsg(e, 'Hi!')
        }}>console 출력</button>

        {/* e.target VS e.currentTarget */}
        <button onClick={handleEvent}>
            <span>handle Evnet</span>
        </button>
    </div>
  )
}

export default Counter