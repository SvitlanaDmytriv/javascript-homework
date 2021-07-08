const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngredient = ingredient => {
  const ingredientEl = document.createElement('li')
  ingredientEl.textContent = ingredient
  return ingredientEl
}

const ingredientsAllEl = ingredients.map(makeIngredient)


const ingredientsContainer = document.querySelector("#ingredients")

ingredientsContainer.append(...ingredientsAllEl)