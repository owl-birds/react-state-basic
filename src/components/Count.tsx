import React, {  ChangeEvent, useContext, useState } from 'react'
import { Counter_Context } from '../context/Counter_Context';

const Count = () => {
    const [count, setCount] = useState(0);
    const [inc, set_inc] = useState(1);


    const { amount, increment } = useContext(Counter_Context);

    const increment_change = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        if (Number(event.target.value))
            set_inc(() => Number(event.target.value))
    }

    return (
        <div>
            <label>change increment</label>
            <input type={"number"} onChange={increment_change} />
            <h4 onClick={() => setCount((prev_val) => prev_val + inc)} >{count}</h4>
            <h1>CONTEXT</h1>
            <h4 onClick={()=>increment(inc)}>{amount}</h4>
        </div>
    )
}

export default Count
