// script.js

const search = document.getElementById('search');
if (search) {
    search.addEventListener('keyup', () => {
        const filter = search.value.toLowerCase();
        document.querySelectorAll('.game-card').forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            card.style.display = title.includes(filter) ? '' : 'none';
        });
    });
}
