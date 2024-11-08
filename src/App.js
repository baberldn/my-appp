import React, { useState } from "react";

const recipes = [
  {
    id: 1,
    title: "Pasta",
    description: "A simple and delicious pasta recipe.",
    ingredients: ["Pasta", "Tomato Sauce", "Cheese", "Garlic", "Basil"],
  },
  {
    id: 2,
    title: "Salad",
    description: "A fresh salad with seasonal vegetables.",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olives", "Feta Cheese"],
  },
  {
    id: 3,
    title: "Pizza",
    description: "Homemade pizza with fresh ingredients.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Pepperoni", "Olives"],
  },
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>

      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <a href="#" className="view-ingredients">View Ingredients</a>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="recipe-detail">
          <button className="close-button" onClick={closeRecipe}>X</button>
          <h2>{selectedRecipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
