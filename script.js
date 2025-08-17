// Floating UI elements (like futuristic screens)
const bg = document.querySelector('.background');

for (let i = 0; i < 8; i++) {
  const elem = document.createElement('div');
  elem.classList.add('floating-ui');
  elem.style.left = Math.random() * 100 + 'vw';
  elem.style.top = Math.random() * 100 + 'vh';
  bg.appendChild(elem);
}

document.querySelectorAll('.floating-ui').forEach(el => {
  el.animate([
    { transform: `translateY(0px)` },
    { transform: `translateY(-20px)` },
    { transform: `translateY(0px)` }
  ], {
    duration: 3000 + Math.random() * 2000,
    iterations: Infinity,
    direction: "alternate"
  });
});
