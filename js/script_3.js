//Avilable_Cars.html

// Search functionality
document.querySelector('#searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? '' : 'none';
    });
});



