var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.gallery-item img').forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImage.src = this.src; 
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}