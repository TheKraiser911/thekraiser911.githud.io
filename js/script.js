const track = document.getElementById('track');
const dotsContainer = document.getElementById('dots-container');
let index = 0;

for (let i = 0; i < 5; i++) {
    const d = document.createElement('div');
    d.classList.add('dot');
    if(i === 0) d.classList.add('active');
    d.addEventListener('click', () => { index = i; update(); });
    dotsContainer.appendChild(d);
}

function update() {
    track.style.transform = `translateX(-${index * 20}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

setInterval(() => { index = (index + 1) % 5; update(); }, 5000);