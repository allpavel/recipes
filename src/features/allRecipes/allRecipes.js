import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';
import { Recipe } from '../../components/Recipe';
import { Button } from '../../components/Button';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';

const favoriteIcon = "./img/favorite.svg";

const allRecipesData = [
    {
        id: 0, name: "blini", img: "./img/blini.jpg"
    },
    {
        id: 1, name: "borsch", img: "./img/borsch.jpg"
    },
    {
        id: 2, name: "kurnik", img: "./img/kurnik.jpg"
    },
    {
        id: 3, name: "pelmeni", img: "./img/pelmeni.jpg"
    },
    {
        id: 4, name: "rastegai", img: "./img/rastegai.jpg"
    },
    {
        id: 5, name: "sugudai", img: "./img/sugudai.jpg"
    },
    {
        id: 6, name: "zapekanka", img: "./img/zapekanka.jpg"
    }
];

export const AllRecipes = () => {
    const allRecipes = useSelector(selectFilteredAllRecipes);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData(allRecipesData));
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