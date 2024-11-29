document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('#navLinks').classList.toggle('active');
});

document.querySelector('#navLinks').addEventListener('click', function (e) {
    if (e.target !== this) {
        document.querySelector('#navLinks').classList.remove('active');
    }
});
