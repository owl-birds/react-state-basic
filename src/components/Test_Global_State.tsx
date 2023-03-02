import React, { useContext } from 'react'
import { Counter_Context } from '../context/Counter_Context'

const Test_Global_State = () => {
    const { amount } = useContext(Counter_Context);
    return (
        <div>
            <h1>TEST GLOBAL STATE (ANOTHER COMPONENT)</h1>
            <h4>{amount}</h4>
        </div>
    )
}

export default Test_Global_State
