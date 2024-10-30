"use client";

import {createContext, useState} from "react";

export const ThemeContext = createContext({
    mode: "dark",
    toggle: () => {}
});

import { ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps)=>{
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => prev === "dark" ? "light" : "dark");
    };

    return(
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={ `theme ${mode}` }> {children} </div>
        </ThemeContext.Provider>
    )
}