// GREETING PARALLAX

const greetParallax = document.querySelector(".greeting-parallax");
const layers = greetParallax.children;

function moveLayers(wScroll) {
  
  Array.from(layers).forEach(layer => {

    const speedCoeff = layer.dataset.speed;
    const layerOffset = wScroll * speedCoeff / 30;


    layer.style.transform = `translateY(-${layerOffset}%)`;
  })

}

if (window.innerWidth >= 768) {
  window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayers(wScroll);
  });
}