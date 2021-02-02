const listItemsRef = document.querySelectorAll("#categories > li");
const infoListItems = (items) => {
  console.log(`В списку ${items.length} категорії.`);

  items.forEach((item) => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`);
    console.log(
      `Кілкість елементів: ${item.lastElementChild.children.length}`
    );
  });
};

infoListItems(listItemsRef);
