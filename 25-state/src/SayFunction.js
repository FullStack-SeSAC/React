import React, { useState } from 'react'

const SayFunction = () => {
    console.log(useState('welcome!')); // 자료를 캐시에 저장 가능
  
    // ** const [a, b] = useState(""); 형태
    // a : state에 저장할 자료
    // b: state 변경을 도와줄 함수
    // useState(''): 상태 초기값, (숫자, 문자, 배열, 객체 등 값의 형태는 자유로움)

    const [msg, setMsg] = useState("welcome!");
    // msg: 메세지 현재 상태
    // setMsg: msg State 값을 변경하는 함수

    const onClickEnter = () => {
        setMsg('안녕하세요');
    }
    const onClickLeave = () => {
        setMsg('안녕히가세요');
    }

    const handleClick = () => {
        setMsg((currentMsg) => {
            return currentMsg === 'welcome!' ? 'Hi' : 'Bye';
        })
    }
    return (
    <div>
        {/* 
            - HTML : onclick="onClickEvent()" -> 문자열 형식의 호출문 등록
            - JS : addEventListener('click', onClickEvent) -> 괄호 제거 함수 바로 시작 X, 클릭 후 함수 호출
            - React: onClick={onClickEvent} -> JS와 동일
        */}
        <h1>Function Component State</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={handleClick}>HI</button>
        <h1>{msg}</h1>
    </div>
  )
}

export default SayFunction