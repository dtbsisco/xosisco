document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader-container");

    document.body.style.overflow = "hidden";

    const networkSpeed = navigator.connection ? navigator.connection.downlink : 2;

    let timeoutDuration = 3000;
    if (networkSpeed >= 5) {
        timeoutDuration = 2000;
    }

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = 0;
        }

        document.body.style.overflow = "auto";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, timeoutDuration);
});