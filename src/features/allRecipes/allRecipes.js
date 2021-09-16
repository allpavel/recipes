import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';
import { Recipe } from '../../components/Recipe';
import { Button } from '../../components/Button';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';

const favoriteIcon = "./img/favorite.svg";

export const AllRecipes = () => {
    const allRecipes = useSelector(selectFilteredAllRecipes);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    };
    
    useEffect(onFirstRender, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe));
    };

    
    return (
        <div className="recipes-container">
            {allRecipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <Button onClickHandler={() => onAddRecipeHandler(recipe)} icon={favoriteIcon}>
                        Add to Favorite
                    </Button>
                </Recipe>
            ))}
        </div>        
    )
}