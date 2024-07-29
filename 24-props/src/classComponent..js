// render() 함수 필수!
// return에 실제로 보여주고 싶은 html 요소를 작성
import React from 'react';
// 여기서 React는 Component를 import하기 위해 필요!
// 상속받기 때문!

// 이런식으로도 선언 가능
// import {Component} from 'react';



class ClassComponent extends React.Component {
    // class ClassComponent extends Component{}
    // 클래스 인스턴스 속성, 키워드 없이 정의의! (let, const, var )
    // 클래스형 컴포넌트는 render 함수 필수!

    student = '바보냥';

    render() {
        const cat = 'rani'; // render 함수 내의 지역변수
        const {name} = this.props;  // 
        console.log('props: ', this.props); // name: 'Ranikun'

        return (

            <>
                <h1>Hello, {cat}</h1>
                <h1>Hi, {this.student}</h1>
                <p>여기는 Class Component!</p>
                {/* props 사용 시 */}
                <p>
                    이름은 <b>{name}</b>
                </p>
            </>
        )
    }
}

export default ClassComponent;

// **porps 작성법!

// 부모가 자식한테 상속, 반대 XXX
// 1. 부모쪽에 <자식 컴포넌트 ={상속 내용}>

// 2. 자식 쪽에 Function(props) {
//      <h1>props.작명</h1>
// }