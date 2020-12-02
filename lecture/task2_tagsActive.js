"use strict";
console.log("task from lecture");

const divEl = document.querySelector(".js-tags");
console.log(divEl);
const selectedTags = new Set();

divEl.addEventListener("click", onTagsClick);

function onTagsClick(event) {
    // 1. проверяем чтобы отлавливать клики только по кнопкам
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    
    //console.log("сработал слушатель");

    // 2. вытянем из датаатрибута название кнопки (не из текста, лучше из пихать в data)
    const currentValue = event.target.dataset.value;
    console.log(currentValue);

    // сделаем проверку на наличие active стейта. если будет активный - напишем remove класс.gallery. До того,
    // как навешaем н нее тогглом класс!
    const isButtonActive = event.target.classList.contains("tags__btn--active");
    console.log("активна ли кнопка", isButtonActive);

    //добавим Тег в наш Сет (перед функцией создали), или удалим - в зав-и от того есть активна ли кнопка
    if (isButtonActive) { selectedTags.delete(currentValue) }
    else { selectedTags.add(currentValue) };


    //навешаем css класс тогглом
    event.target.classList.toggle("tags__btn--active");

    //всунем в список 
    console.log(selectedTags);
}