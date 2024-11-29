document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-button");
    const galleryItems = document.querySelectorAll(".gallery-item");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            galleryItems.forEach(item => {
                item.style.display = category === "all" || item.getAttribute("data-category") === category 
                    ? "block" 
                    : "none";
            });
        });
    });
});