import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice';
import { Recipe } from '../../components/Recipe';
import { Button } from '../../components/Button';

const removeIcon = "./img/unfavorite.svg";

export const FavoriteRecipes = () => {
    const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    const dispatch = useDispatch();

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <Button onClickHandler={() => onRemoveRecipeHandler(recipe)} icon={removeIcon}>
                        Remove
                    </Button>
                </Recipe>
            ))}
        </div>
    )

}