import React from 'react'
import { useRecoilState } from 'recoil'
import { counter_state } from '../recoil_state/Counter_state.ts'
import { increment_state } from '../recoil_state/Increment_state.ts';

const Count_recoil = () => {
    const [amount, set_amount] = useRecoilState(counter_state);
    const [inc, set_inc] = useRecoilState(increment_state);
    return (
        <div>
            <h1>RECOIL TEST</h1>
            <h4 onClick={() => set_amount((prev_val) => prev_val + inc)} >{amount}</h4>
        </div>
    )
}

export default Count_recoil
