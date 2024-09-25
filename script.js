let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar .nav-link");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Toggle navbar on menu icon click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar .nav-link");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Toggle navbar on menu icon click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.querySelector('.testimonials-item').addEventListener('click', function() {
    console.log('Div clicked!'); // Check if this logs to the console
    window.location.href = 'https://github.com/MudavathSrinu001?tab=repositories';
});
