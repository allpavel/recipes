import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: "favoriteRecipes",
    initialState: [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);
        },
        removeRecipe: (state, action) => {
            return state.filter(recipe => recipe.id !== action.payload.id)
        }
    }
};

export const favoriteRecipesSlice = createSlice(options);

export const {addRecipe, removeRecipe} = favoriteRecipesSlice.actions;

export const selectFavoriteRecipes = state => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = state => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default favoriteRecipesSlice.reducer;