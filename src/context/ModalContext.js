import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //Provider state
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipeInfo, setRecipeInfo] = useState({});

    useEffect(() => {
        if(!idRecipe) return;
        const makeCall = async () => {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const recipeSteps = await axios.get(url);
            setRecipeInfo(recipeSteps.data.drinks[0]);
        }
        makeCall();
    }, [idRecipe])

    return (
        <ModalContext.Provider
            value={{
                setIdRecipe,
                setRecipeInfo,
                recipeInfo
            }}
        >
            {props.children}
        </ModalContext.Provider>    
    );
}

export default ModalProvider;