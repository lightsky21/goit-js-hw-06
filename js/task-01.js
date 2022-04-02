const categoriesEl = document.querySelector('#categories');

const categoriesChildrenEl = categoriesEl.children;
const categoriesChildrenArr = [...categoriesChildrenEl];

console.log(`Number of categories: ${categoriesChildrenEl.length}`);

categoriesChildrenArr.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
console.log(`Elements: ${element.lastElementChild.children.length}`);
});





