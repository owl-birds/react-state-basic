import React, { useContext } from 'react'
import { useRecoilValue } from 'recoil';
import { Counter_Context } from '../context/Counter_Context'
import { counter_state } from '../recoil_state/Counter_state.ts';

const Test_Global_State = () => {
    const { amount } = useContext(Counter_Context);
    const amount_recoil = useRecoilValue(counter_state);
    return (
        <div>
            <h1>TEST GLOBAL STATE (ANOTHER COMPONENT)</h1>
            <h4>REACT CONTEXT {amount}</h4>
            <h4>RECOIL STATE {amount_recoil}</h4>
        </div>
    )
}

export default Test_Global_State
