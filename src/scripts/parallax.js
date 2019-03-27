const greetParallax = document.querySelector(".greeting-parallax");
const greetLayers = greetParallax.children;

const revContParallax = document.querySelector(".rev-cont-parallax");
const revContLayers = revContParallax.children;
let revContTop, delta;

function moveLayers(wScroll, layers) {
  Array.from(layers).forEach(layer => {
    const speedCoeff = layer.dataset.speed;
    const layerOffset = (wScroll * speedCoeff) / 30;

    layer.style.transform = `translateY(-${layerOffset}%)`;
  });
}

window.addEventListener("scroll", e => {

  if (window.innerWidth >= 768) {

    if (!revContTop) {
      revContTop = getCoords(revContParallax).top;
      delta = revContTop - window.innerHeight;
    }


    const wScroll = window.pageYOffset;
    moveLayers(wScroll, greetLayers);

    if (wScroll > delta) {
      const newScroll = wScroll - delta;
      moveLayers(newScroll, revContLayers);
    }
  }
});

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}
