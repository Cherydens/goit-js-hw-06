const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsContainerEl = document.querySelector('ul#ingredients');

const makeIngredients = ingredientsArr => {
  return ingredientsArr.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add('item');

    return ingredientEl;
  });
};

const ingredientsEl = makeIngredients(ingredients);

ingredientsContainerEl.append(...ingredientsEl);
