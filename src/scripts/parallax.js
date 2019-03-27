// GREETING PARALLAX

const greetParallax = document.querySelector(".greeting-parallax");
const greetLayers = greetParallax.children;

const revContParallax = document.querySelector(".rev-cont-parallax");
const revContLayers = revContParallax.children;



function moveLayers(wScroll, layers) {
  Array.from(layers).forEach(layer => {
    const speedCoeff = layer.dataset.speed;
    const layerOffset = (wScroll * speedCoeff) / 30;

    layer.style.transform = `translateY(-${layerOffset}%)`;
  });
}

window.addEventListener("scroll", e => {
  if (window.innerWidth >= 768) {
    const wScroll = window.pageYOffset;
    console.log(wScroll);
    moveLayers(wScroll, greetLayers);
  }
});
