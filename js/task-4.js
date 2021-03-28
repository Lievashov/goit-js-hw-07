// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counter = document.getElementById('value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
let counterValue = 0;


increment.addEventListener('click', event => {
   counterValue += 1;
   counter.textContent = counterValue;
});

decrement.addEventListener('click', event => {
    counterValue -= 1;
    counter.textContent = counterValue;
 });