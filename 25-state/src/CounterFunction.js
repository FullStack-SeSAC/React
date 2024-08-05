import React, {useStaet} from 'react'

const CounterFunction = (props) => {
    const [num, setNum] = useStaet(0);
    const onClickEnter = () => {
        setNum(num + 1);
    }

    const { value } = props;
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={onClickEnter}>{value}</button>
        <button onClick={onClickEnter}>Plus 1</button>
    </div>
  )
}

export default CounterFunction