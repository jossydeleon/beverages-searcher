import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

//Create Context
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [searchRecipes, setSearchRecipes] = useState({
        name:'',
        category:''
    });

    const [initSearch, setInitSearch] = useState(false);

    const { name, category } = searchRecipes;

    useEffect(() => {
        if(initSearch) {}
            const makeCall = async () => {
                const url =  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const recipes = await axios.get(url);
                setRecipes(recipes.data.drinks);
            }
            makeCall();

    }, [searchRecipes]);

    return (
        <RecipesContext.Provider
            value = {{
                setSearchRecipes,
                setInitSearch,
                recipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;