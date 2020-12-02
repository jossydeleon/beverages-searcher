import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Create Context
export const CategoryContext = createContext();

//Create Provider
const CategoryProvider = (props) => {

    //Create context's state
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const makeCall = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categories = await axios.get(url);
            setCategories(categories.data.drinks);
        }
        makeCall();
        
    },[]);

    // This is what the provider is going to return
    return (
        <CategoryContext.Provider
            //Here there will available the data than we 
            //want to share with other components
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;