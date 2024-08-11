import React, { useState } from 'react';

export default function Input() {
    const [info, setInfo] = useState([
        {
            id: 1,
            name: '코디',
            email: 'codingon@gmail.com',
        },
        {
            id: 2,
            name: '라니',
            email: 'rani@gmail.com',
        },
    ]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const submitInfo = () => {
        if (!name || !email) {
            alert("이름과 이메일을 모두 입력해주세요."); // 입력 확인
            return;
        }

        const newInfo = info.concat({
            id: info.length + 1,
            name: name,
            email: email,
        });

        setInfo(newInfo);
        setName('');
        setEmail('');
        console.log(newInfo); // 새로운 배열 출력
    };

    const handleKeyDown = (e) => {
        // Enter 키가 눌렸는지 확인
        if (e.key === 'Enter') {
            submitInfo();
        }
    };

    const handleDelete = (id) => {
        const newInfo = info.filter((value) => value.id !== id);
        setInfo(newInfo);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder='이름' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder='이메일' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}  
                onKeyDown={handleKeyDown} 
            />
            <button onClick={submitInfo}>등록</button>

            <h3>등록된 사용자 목록:</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((value) => (
                        <tr key={value.id} onDoubleClick={() => handleDelete(value.id)}> {/* 더블 클릭 시 삭제 */}
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
