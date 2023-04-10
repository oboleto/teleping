const chat = document.getElementById('terminal');
const info = document.getElementById('info');
let messageQueue = [];
let isDisplayingMessage = false;
let isAddingToQueue = false;









// function showInfo() {
//   const itemInfo = document.createElement('span');
//   itemInfo.innerHTML = `<span class="info"></span>`;
//   typeMessage("BOLETO LABORATORIES bltOS 3.11 ttyS0 1200 1200", (itemInfo.querySelector('.info')), 1000);
//   chat.appendChild(itemInfo);
  
// }



// setTimeout(() => {
//   connectWebSocket();
// }, 10000);




// const observer = new MutationObserver((mutationsList) => {
//   for (const mutation of mutationsList) {
//     if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//       const target = mutation.target;
//       if (target.classList.contains('hide')) {
//         const computedHeight = getComputedStyle(target).getPropertyValue('height');
//         target.style.height = computedHeight;
//         setTimeout(() => {
//           target.style.height = '0';
//         }, 1000);
//       }
//     }
//   }
// });

// observer.observe(document, { attributes: true, attributeFilter: ['class'], subtree: true });
