// JavaScript a modal működéséhez
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementsByClassName("close")[0];

const images = document.querySelectorAll(".gallery-item img");

images.forEach(image => {
    image.addEventListener("click", (e) => {
        e.preventDefault(); // Megakadályozza az alapértelmezett kattintás viselkedést
        modal.style.display = "flex"; // A modal megjelenítése
        modalImg.src = image.src; // A képet a modalba beállítjuk
        modalCaption.innerHTML = image.alt; // A képaláírás beállítása (opcionális)
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // A modal elrejtése
});

// Close the modal when clicking outside of the image
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; // Ha a háttérre kattintanak, zárja be a modalt
    }
});
