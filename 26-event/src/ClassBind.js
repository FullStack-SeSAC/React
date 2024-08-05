import React, { Component } from 'react';

export default class ClassBind extends Component {
    constructor(props) {
        // 클래스형 컴포넌트의 생성자 메서드, 컴포넌트가 처음 생성시 호출
        super(props);

        console.log('constructor this :', this);
        this.state = {
            name: 'sesac',
        };
        
        // #1. 클래스 컴포넌트에서 이벤트 사용 - bind 사용
        /** 
         * 'bind'메서드로 'this' 바인딩
         * ** Q) 바인딩이란?
         *      - 프로그램의 어떤 기본 단위가 갖을 수 있는 구성요소의 구체적 값, 성격을 확정
         * 
         * - JS에서 'this'는 함수가 호출되는 방식에 따라 달라짐
         * - 즉, 'this'가 무엇을 가르키는지 명확하게 명시하기위해 바인딩이 필요!
         *  => 'this'가 올바른 객체를 지정하게 설정
        */

        // #2. 생성자에서 바인딩하기
        this.printConsole = this.printConsole.bind(this);
    }

    printConsole() {
        console.log('printConsole - this :', this); // 컴포넌트 인스턴스를 가리킴
        console.log('printConsole - state :', this.state); // 컴포넌트의 상태 출력
        console.log('-----------------------------------');
    }

    // #3. 화살표 함수에서 이벤트 사용
    /** 
     * 화살표 함수는 'this'가 상위 스코프의 'this'를 참조하므로 바인딩 필요 X
     *  - Lexical Scoping
     * 자신만의 this 갖기 X
    */

    printConsole2 = (e, msg, e2) => {
        console.log('e ->', e);
        console.log('e.target ->', e.target);
        console.log('e.currentTarget ->', e.currentTarget);
        console.log('msg ->', msg);
        console.log('e2 ->', e2);
        console.log('this : ', this);   // 클래스 인스턴스
    }

  render() {
    return (
        <>
            <h1>ClassBind</h1>
            {/* 인자 없이 호출 */}
            <button onClick={this.printConsole}>printConsole(인자X)</button>

            {/* 이벤트 객체와 인자 전달 */}
            <button onClick={(e) => this.printConsole2(e, 'msg', 'msg2')}>printConsole2(인자O)</button>

            {/* 이벤트 객체만 전달 */}
            <button onClick={this.printConsole2}>printConsole2(인자 X)</button>
        </>
    )
  }
}