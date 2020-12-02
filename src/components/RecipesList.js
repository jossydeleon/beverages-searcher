import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipesContext } from '../context/RecipesContext';

const RecipesList = () => {

    //Extract recipes from context
    const {recipes} = useContext(RecipesContext);

    if(!recipes) return null;

    return (
        <div className="row mt-5">
            {recipes.map(recipe => (
                    <Recipe
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                )
            )}
        </div>
    );
}

export default RecipesList;