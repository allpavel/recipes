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

const initialState = [];

export const loadData = () => {
    return {
        type: "allRecipes/loadData",
        payload: allRecipesData
    };
};

export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case "allRecipes/loadData":
            return action.payload;
        case "favoriteRecipes/addRecipe":
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case "favoriteRecipes/removeRecipe":
            return [action.payload, ...allRecipes];
        default:
            return allRecipes;
    }
}