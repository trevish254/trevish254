const heatmap = document.querySelector('#heatmap-squares');
const levels = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4'];

for (let index = 0; index < 53 * 7; index += 1) {
  const square = document.createElement('i');
  const wave = Math.sin(index * 0.31) + Math.sin(index * 0.071) * 0.8;
  const intensity = wave > 1.15 ? 4 : wave > 0.55 ? 3 : wave > -0.15 ? 2 : wave > -0.8 ? 1 : 0;
  square.className = levels[intensity];
  square.title = `${intensity * 2 + 1} contributions`;
  heatmap.appendChild(square);
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});
