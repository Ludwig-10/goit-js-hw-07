const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  const listIngredientsRef = document.querySelector("#ingredients");
  const listItems = (item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
    };
    const itemsArray = ingredients.map((ingredient) => listItems(ingredient));
    listIngredientsRef.append(...itemsArray);