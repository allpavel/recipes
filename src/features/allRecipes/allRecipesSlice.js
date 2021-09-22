import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { createAction, createSlice } from "@reduxjs/toolkit";

const addToFavorite = createAction("favoriteRecipes/addRecipe");
const removeFromFavorite = createAction("favoriteRecipes/removeRecipe")

const options = {
    name: "allRecipes",
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return state = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(addToFavorite, (state, action) => {
            return state.filter(recipe => parseInt(recipe.id) !== parseInt(action.payload.id));
        })
        .addCase(removeFromFavorite, (state, action) => {
            state.unshift(action.payload);
        })
    }
};

export const allRecipesSlice = createSlice(options);
export const { loadData, addRecipe, removeRecipe } = allRecipesSlice.actions;

export const selectAllRecipes = state => state.allRecipes;

export const selectFilteredAllRecipes = state => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default allRecipesSlice.reducer;