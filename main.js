// const images = document.querySelectorAll('.image');
// const fullImageContainer = document.querySelector('.full-image-container');
// const fullImage = document.querySelector('.full-image');

// let currentIndex = 0;

// function showFullImage(index) {
//   fullImage.src = images[index].src;
//   fullImageContainer.style.display = 'block';
// }

// document.addEventListener('keydown', function (event) {
//   if (event.key === 'ArrowLeft') {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showFullImage(currentIndex);
//   } else if (event.key === 'ArrowRight') {
//     currentIndex = (currentIndex + 1) % images.length;
//     showFullImage(currentIndex);
//   } else if (event.key === 'Escape') {
//     fullImageContainer.style.display = 'none';
//   }
// });

// images.forEach((image, index) => {
//   image.addEventListener('click', () => {
//     currentIndex = index;
//     showFullImage(currentIndex);
//   });
// });

// fullImage.addEventListener('click', () => {
//   fullImageContainer.style.display = 'none';
// });

// // ex 2
// let render =  document.querySelector('[data-action = "render"]');
// let destroy =  document.querySelector('[data-action = "destroy"]');
// let boxesContainer = document.querySelector('#boxes')
// let inpt = document.querySelector('[type="number"]')

// function clearBoxes() {
//     let parse = +inpt.value;
//     const boxesArr = [];

//     for (let a = 0; a < parse; a++) {
//       const boxesContainer = document.createElement("div");
//       boxesContainer.style.width = `${30 + a * 10}px`;
//       boxesContainer.style.height = `${30 + a * 10}px`;
//       boxesContainer.style.backgroundColor = getRandomColor();
//       boxesArr.push(boxesContainer);
//     }
  
//     boxesContainer.append(...boxesArr);
//   }

//   function destroyBoxes() {
//     boxesContainer.innerHTML = "";
//     inpt.value = "";
//   }

//   function getRandomColor(){
//     let red = Math.floor(Math.random() * 256);
//     return `rgb(${red}, 0, 0)`;
//   }

// render.addEventListener("click", clearBoxes);
// destroy.addEventListener("click", destroyBoxes)

// backdrop.addEventListener('click', () => {
//   body.classList.remove('show-modal');
// })



const open = document.querySelector('[data-action="open-modal"]');
const close = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

open.addEventListener('click', () => {
  body.classList.add('show-modal');
})

close.addEventListener('click', () => {
  body.classList.remove('show-modal');
})
