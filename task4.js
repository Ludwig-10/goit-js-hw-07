const countRef = document.querySelector("#value");
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
let counterValue = +countRef.textContent;
const increment = () => (countRef.textContent = counterValue += 1);
const decrement = () => (countRef.textContent = counterValue -= 1);

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);
