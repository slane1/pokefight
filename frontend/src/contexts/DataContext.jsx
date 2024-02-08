import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext();


export default function DataContextProvider({ children }) {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3000/pokemon');
                console.log(response.data);
                setEntries(response.data);
                setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    fetchData();
    },[]);


    return (
        <DataContext.Provider 
        value={{ 
            entries, 
            setEntries, 
            loading }}>
        {children}
        </DataContext.Provider>
    );
}