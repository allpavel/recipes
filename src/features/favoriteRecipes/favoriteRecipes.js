import React from 'react';
import { removeRecipe } from './favoriteRecipesSlice';
import { Recipe } from '../../components/Recipe';
import { Button } from '../../components/Button';

const removeIcon = "./img/unfavorite.svg";

export const FavoriteRecipes = (props) => {
    const { favoriteRecipes, dispatch } = props;

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {favoriteRecipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <Button onClickHandler={onRemoveRecipeHandler} icon={removeIcon}>
                        Remove
                    </Button>
                </Recipe>
            ))}
        </div>
    )

}