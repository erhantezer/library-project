import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useGlobalContext =() => {
    return useContext(AppContext);
};

export const AppProvider = ({children}) => {
    const [query, setQuery] = useState("");
    const [selectType, setSelectType] = useState("all");
    const [myData, setMyData] = useState([]);

    const API_KEY = 'AIzaSyCdjHYd9EaTC8Oj4K9XZkVdODJm6-TXtos';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${API_KEY}`;

    const getData = async () => {
        try {
            const {data} = await axios.get(url)
            setMyData(data.items) //! data içerisindekii item array içinde veriler
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
            <AppContext.Provider value={{
            getData, 
            query, 
            setQuery, 
            selectType,
            setSelectType, 
            myData, 
            setMyData
            }}>
                {children}
            </AppContext.Provider>
        )
}