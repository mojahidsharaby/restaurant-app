import axios from "axios";

const api = axios.create({
  baseURL: "https://forkify-api.jonas.io/api/v2",
});

const recipeSearches = [
  { search: "hamburger", category: "Burger" },
  { search: "pasta", category: "Pasta" },
  { search: "pizza", category: "Pizza" },
];

export async function getRecipes() {
  const responses = await Promise.all(
    recipeSearches.map(({ search, category }) =>
      api
        .get("/recipes", {
          params: { search },
        })
        .then(({ data }) =>
          data.data.recipes.map((recipe) => ({
            ...recipe,
            category,
          })),
        ),
    ),
  );

  return responses.flat();
}

export async function getRecipe(id) {
  const { data } = await api.get(`/recipes/${id}`);

  return data.data.recipe;
}
