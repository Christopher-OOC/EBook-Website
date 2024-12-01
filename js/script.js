function userScroll() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50 ) {
        navbar.classList.add('bg-dark');
    }
    else {
        navbar.classList.remove('bg-dark');
    }
}

document.addEventListener('DOMContentLoaded', userScroll);