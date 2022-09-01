const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredientsEl = document.querySelector('#ingredients');

const makeItemIgredient = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    return itemEl;
  });
};

const itemsEl = makeItemIgredient(ingredients);

listIngredientsEl.append(...itemsEl);
