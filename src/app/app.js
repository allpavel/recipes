import React from 'react';
import { AllRecipes } from '../features/allRecipes/allRecipes';
import { FavoriteRecipes } from '../features/favoriteRecipes/favoriteRecipes';
import { SearchTerm } from '../features/searchTerm/searchTerm';

export function App() {
    return (
        <>  
            <section>
                <SearchTerm />
            </section>
            <section>
                <h2>Favorite Recipes</h2>
                <FavoriteRecipes />
            </section>
            <hr />
            <section>
                <h2>All Recipes</h2>
                <AllRecipes />
            </section>
        </>
    );
};