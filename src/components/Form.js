import React, {useContext, useState} from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
    
    const {categories} = useContext(CategoryContext);
    const {setSearchRecipes, setInitSearch} = useContext(RecipesContext);

    //Local state
    const [search, setSearch] = useState({
        name:'',
        category:''
    });

    const handleForm = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    };

    return (
        <form 
            className="col-12" 
            onSubmit={e => {
                e.preventDefault();
                setSearchRecipes(search);
                setInitSearch(true);
            }}
        >
            
            <fieldset className="text-center">
                <legend>Search beverages by Category or Ingredients</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by Ingredient"
                        onChange={handleForm}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        name="category"
                        className="form-control"
                        onChange={handleForm}
                    >
                        <option value="">-- Choose Category --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Beverages"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;