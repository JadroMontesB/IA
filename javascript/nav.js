// Selección de los elementos del navbar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-nav');

// Añadir evento de click al botón del navbar
navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Selección de todos los elementos del navbar
const navLinks = document.querySelectorAll('.nav-link');

// Añadir evento de click a cada elemento del navbar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remover la clase "active" del menú
        navbarMenu.classList.remove('active');
    });
});

