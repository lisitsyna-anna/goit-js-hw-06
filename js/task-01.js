const itemsEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  );
});
