import React from 'react';
import { AllRecipes } from '../features/allRecipes/allRecipes';
import { FavoriteRecipes } from '../features/favoriteRecipes/favoriteRecipes';
import { SearchTerm } from '../features/searchTerm/searchTerm';

export function App(props) {
    const { state, dispatch } = props;

    const getVisibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
    const getVisibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);
    
    return (
        <>  
            <section>
                <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
            </section>
            <section>
                <h2>Favorite Recipes</h2>
                <FavoriteRecipes favoriteRecipes={getVisibleFavoriteRecipes} dispatch={dispatch} />
            </section>
            <hr />
            <section>
                <h2>All Recipes</h2>
                <AllRecipes allRecipes={getVisibleAllRecipes} dispatch={dispatch} />
            </section>
        </>
    );

}

function getFilteredRecipes(recipes, searchTerm) {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())); 
}