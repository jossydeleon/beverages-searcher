import React,{useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const Recipe = ({recipe}) => {

  //Config Modal UI
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setIdRecipe(null);
    setRecipeInfo({})
    setOpen(false);
  }

  const {setIdRecipe, setRecipeInfo, recipeInfo} = useContext(ModalContext);

  const handleClick = () => {
    setIdRecipe(recipe.idDrink);
    handleOpen();
  }

  //Show Ingredients
  const showIngredients = (recipeInfo) => {
    let ingredients = [];
    for(let i= 1; i<16; i++) {
      if(recipeInfo[`strIngredient${i}`]) {
        ingredients.push(
          <li>{recipeInfo[`strIngredient${i}`] } {recipeInfo[`strMeasure${i}`] }</li>
        )
      }
    }

    return ingredients;
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img 
          src={recipe.strDrinkThumb}
          alt={`Picture of: ${recipe.strDrink}`} 
          className="card-img-top"
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={handleClick}
          >
            View Recipe
          </button>

          <Modal
            open={open}
            onClose={handleClose}
          >
            <div style={modalStyle} className={classes.paper}>
                <h2>{recipeInfo.strDrink}</h2>
                <h3 className="mt-4">Instructions</h3>
                <p>
                    {recipeInfo.strInstructions}
                </p>

                <img 
                  src={recipeInfo.strDrinkThumb} 
                  className="img-fluid my-4"
                />

                <h3>Ingredients and Quantities</h3>
                <ul>
                  {showIngredients(recipeInfo)}
                </ul>
            </div>
          </Modal>

        </div>

      </div>
    </div>
  );
}

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default Recipe;