import { selectSearchTerm } from "../searchTerm/searchTermSlice";

const initialState = [];

export const addRecipe = (recipe) => {
    return {
        type: "favoriteRecipes/addRecipe",
        payload: recipe
    };
};

export const removeRecipe = (recipe) => {
    return {
        type: "favoriteRecipes/removeRecipe",
        payload: recipe
    };
};

export const favoriteRecipesReducer = (favoriteRecipes = initialState, action) => {
    switch (action.type) {
        case "favoriteRecipes/addRecipe":
            return [action.payload, ...favoriteRecipes];
        case "favoriteRecipes/removeRecipe":
            return favoriteRecipes.filter((recipe) => parseInt(recipe.id) !== parseInt(action.payload.id));
        default:
            return favoriteRecipes;
    }
};

export const selectFavoriteRecipes = state => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = state => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
};