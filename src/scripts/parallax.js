// GREETING PARALLAX

const greetParallax = document.querySelector(".greeting-parallax");
const greetParallaxHeight = getComputedStyle(greetParallax).height;
console.log(greetParallaxHeight);
const layers = greetParallax.children;

function moveLayers(wScroll) {
  console.log(wScroll);
  
  Array.from(layers).forEach(layer => {

    const speedCoeff = layer.dataset.speed;
    const layerOffset = wScroll * speedCoeff;

    // if (wScroll < 350) {
    //   layer.style.transform = `translateY(-${layerOffset}%)`;
    // }

    layer.style.transform = `translateY(-${layerOffset}%)`;
  })

}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayers(wScroll);
});