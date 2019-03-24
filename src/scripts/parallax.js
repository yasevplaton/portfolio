// GREETING PARALLAX

const greetParallax = document.querySelector(".greeting-parallax");
const layers = greetParallax.children;

function moveLayers(wScroll) {
  
  Array.from(layers).forEach(layer => {

    const speedCoeff = layer.dataset.speed;
    const layerOffset = wScroll * speedCoeff;


    layer.style.transform = `translateY(-${layerOffset}%)`;
  })

}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayers(wScroll);
});