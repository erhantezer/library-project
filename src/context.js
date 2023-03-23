import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext =() => {
    return useContext(AppContext);
};

export const AppProvider = ({children}) => {
    const [query, setQuery] = useState("");
    const [selectType, setSelectType] = useState("all");
    const [data, setData] = useState([]);

    const API_KEY = 'AIzaSyCdjHYd9EaTC8Oj4K9XZkVdODJm6-TXtos';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${API_KEY}`;
    
    return (
            <AppContext.Provider value={{}}>
                {children}
            </AppContext.Provider>
        )
}