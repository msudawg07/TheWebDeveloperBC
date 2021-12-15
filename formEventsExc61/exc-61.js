const form = document.querySelector('form');
const quantity = document.querySelector('#qty');
const product = document.querySelector('#product');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newEl = document.createElement('li');
    newEl.innerText = `${quantity.value} ${product.value}`;
    const newUl = document.querySelector('#list');
    newUl.appendChild(newEl);
    quantity.value = "";
    product.value = "";
})
