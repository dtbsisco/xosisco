var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", function() {
    modal.style.display = "none";
});

document.querySelectorAll('.gallery-item img').forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImage.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
