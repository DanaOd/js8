"use strict";

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

// ШАГ 1. Отрендерим инфую смепаем массив и создадим разметку на каждый цвет

function makeColorCards(colors) {
    return colors.map(({ hex, rgb })=>{
        return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `
    }).join("");
}

    //найдем куда вставить
const divEl = document.querySelector(".js-palette");
console.log(divEl);

// вставим 
const colorPalette = makeColorCards(colors);
console.log(colorPalette);

divEl.insertAdjacentHTML("beforeend", colorPalette);

// ШАГ 2. ДЕЛЕГИРОВАНИЕ. При клике на карточку покрасим бекграунд
// 2.1. кликнули ли мы по цвету или по всей карточке.
// если target НЕ цвет(внутряк с классом) то выходим

// 2.2. на предка (colsest) навешаем класс is-active

// - найти текущую активную карточку
//     - если она есть - убираем класс active
//     - если нет - продолжаем и навкшиваем класс active

// 2.3 получаем через дата - аттрибут цвет хекс
//     в style бекграундцвет приравнивам этот хекс

// 2.4 абстрагируем и выносим вовне функции для 1)убрать класс 2)добавить класс (на родителя)  3)покрасить цвет (цвет)

