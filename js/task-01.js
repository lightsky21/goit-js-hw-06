const categoriesEl = document.querySelector('#categories');

const categoriesChildrenEl = categoriesEl.children;

const categoriesFirstEl = categoriesEl.firstElementChild;
const categoriesFirstTitleEl = categoriesFirstEl.firstElementChild;
const categoriesFirstListEl = categoriesFirstTitleEl.nextElementSibling;
const categoriesFirstListChildrenEl = categoriesFirstListEl.children;

const categoriesSecondEl = categoriesFirstEl.nextElementSibling;
const categoriesSecondTitleEl = categoriesSecondEl.firstElementChild;
const categoriesSecondListEl = categoriesSecondTitleEl.nextElementSibling;
const categoriesSecondListChildrenEl = categoriesSecondListEl.children;


const categoriesLastEl = categoriesEl.lastElementChild;
const categoriesLastTitleEl = categoriesLastEl.firstElementChild;
const categoriesLastListEl = categoriesLastTitleEl.nextElementSibling;
const categoriesLastListChildrenEl = categoriesLastListEl.children;



console.log(`Number of categories: ${categoriesChildrenEl.length}`);

console.log(`Category: ${categoriesFirstTitleEl.textContent}`);
console.log(`Elements: ${categoriesFirstListChildrenEl.length}`);

console.log(`Category: ${categoriesSecondTitleEl.textContent}`);
console.log(`Elements: ${categoriesSecondListChildrenEl.length}`);

console.log(`Category: ${categoriesLastTitleEl.textContent}`);
console.log(`Elements: ${categoriesLastListChildrenEl.length}`);




