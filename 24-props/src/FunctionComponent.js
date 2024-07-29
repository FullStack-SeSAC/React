import React from 'react';
// 함수형
// 직관적으로 함수 이름 만들고, 보여줄 HTML 요소 return 문에 작성
// 화살표 함수(함수 표현식)로 작성해도 되고, 함수 선언문으로 작성해도 된다

const FunctionComponent = (props) => {
    console.log('function props ->', props);
    const {name} = props;
    const teacher = 'rani';

    return (
        <>
            <h1>Hi~ {teacher}</h1>
            <p>여기는 functional Component!</p>
            {/* props 사용 시 */}

            <p>
                {/* 새로운 컴포넌트의 이름은 <b>{porps.name}</b> */}
            </p>
            <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
        </>
    )
}

export default FunctionComponent;