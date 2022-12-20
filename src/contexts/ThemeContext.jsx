import { createContext, useEffect, useState } from "react";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";


export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(dark);

    function toggleTheme() {
        setTheme(theme.title === "dark" ? light : dark);
        localStorage.setItem("@current-theme", JSON.stringify(theme));
    }

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem("@current-theme"));
        currentTheme && setTheme(currentTheme.title === "dark" ? light : dark)
    }, []);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}