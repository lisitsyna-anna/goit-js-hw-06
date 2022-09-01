const itemsEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
  console.log(
    `Category: ${item.querySelector('h2').textContent}\nElements: ${
      item.querySelectorAll('li').length
    }`
  );
});
