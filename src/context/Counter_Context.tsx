import { createContext } from "react";

export interface Global_Content {
    amount: number;
    increment: (inc: number) => void;
}

export const Counter_Context = createContext<Global_Content>(
    {
        amount: 0,
        increment: (inc: number) => {},
    }
);
