import { useState, ReactNode } from "react"
import { Counter_Context } from "./Counter_Context";

interface Provider_Props {
    children: ReactNode;
}

export const Counter_Provider = (props: Provider_Props) => {
    const { children } = props;

    const [amount, set_amount] = useState(0);
    const increment = (add: number = 1)=>{
        set_amount((prev_amount)=>prev_amount+add);
    }
    return <Counter_Context.Provider value={{amount, increment}}>
        {children}
    </Counter_Context.Provider>
}
