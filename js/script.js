// alle kaarten selecteren
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');
        const modal = document.getElementById(targetId);
        if(modal) {
            modal.classList.add('active'); // active class opent de modal
        }
    });
});

// sluit modal
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.classList.remove('active');
    });
});

// klik buiten modal sluit ook
window.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if(e.target === modal) {
            modal.classList.remove('active');
        }
    });
});


// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
