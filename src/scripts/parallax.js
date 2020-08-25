// const greetParallax = document.querySelector(".greeting-parallax");
// const greetLayers = greetParallax.children;

// // const expContParallax = document.querySelector(".exp-cont-parallax");
// // const expContLayers = expContParallax.children;
// // let expContTop, delta;

// function moveLayers(wScroll, layers) {
//   Array.from(layers).forEach(layer => {
//     const speedCoeff = layer.dataset.speed;
//     const layerOffset = (wScroll * speedCoeff) / 30;

//     layer.style.transform = `translateY(-${layerOffset}%)`;
//   });
// }

// window.addEventListener("scroll", e => {

//   if (window.innerWidth >= 768) {

//     // if (!expContTop) {
//     //   expContTop = getCoords(expContParallax).top;
//     //   delta = expContTop - window.innerHeight;
//     // }


//     const wScroll = window.pageYOffset;
//     moveLayers(wScroll, greetLayers);

//     // if (wScroll > delta) {
//     //   const newScroll = wScroll - delta;
//     //   moveLayers(newScroll, expContLayers);
//     // }
//   }
// });

// /*

// function getCoords(elem) {
//   var box = elem.getBoundingClientRect();

//   var body = document.body;
//   var docEl = document.documentElement;

//   var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//   var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

//   var clientTop = docEl.clientTop || body.clientTop || 0;
//   var clientLeft = docEl.clientLeft || body.clientLeft || 0;

//   var top  = box.top +  scrollTop - clientTop;
//   var left = box.left + scrollLeft - clientLeft;

//   return { top: Math.round(top), left: Math.round(left) };
// }

// */
