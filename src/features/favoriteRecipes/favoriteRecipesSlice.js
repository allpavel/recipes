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
            return [...favoriteRecipes, action.payload];
        case "favoriteRecipes/removeRecipe":
            return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id);
        default:
            return favoriteRecipes;
    }
}