"use strict";

console.log("Task 1");

import images from './gallery-items.js'
// console.log(images);

// task description. 
// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
// Превью результата посмотри по ссылке https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3

// Разбей задание на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных и предоставленному шаблону.
// 2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// 3. Открытие модального окна по клику на элементе галереи.
// 4. Подмена значения атрибута src элемента img.lightbox__image.
// 5. Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6. Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того, чтобы при следующем открытии
// модального окна, пока грузится изображение, мы не видели предыдущее.

// Стартовые файлы
// В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле gallery - items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение,
//     оригинальное и описание.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе img,
//     и указываться в href ссылки(это необходимо для доступности).

// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}



// 1. Создание и рендер разметки по массиву данных и предоставленному шаблону.

const targetDivEl = document.querySelector(".js-gallery");
// console.log(targetDivEl);

const createGalleryMarkDown = (image) => {
  return images.map(({preview, original, description}) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</li>`
})
    .join("")
}


const galleryMarkDown = createGalleryMarkDown(images);
// console.log(galleryMarkDown);

targetDivEl.insertAdjacentHTML("beforeend", galleryMarkDown);

//2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
targetDivEl.addEventListener("click", onImgClick);

function onImgClick(event) {

  //воспользоваться preventDefault чтобы a не открывалось cамо

  event.preventDefault()
  if (event.target.nodeName!=="IMG") {
    return;
  }
  console.log("клик по картинке");

  // 3. Открытие модального окна по клику на элементе галереи. is-open

  document.body.classList.add("lightbox");
  //document.body.classList.add("is-open"); //а можно 2 за раз добавить?? каким синтаксисом? НЕ РАБОТАЕТ
  console.log(document.body.classList);
}
 