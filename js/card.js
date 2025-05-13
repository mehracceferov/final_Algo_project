document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-item");

    cards.forEach((card) => {
        const container = card.querySelector(".images-container");
        const prevBtn = card.querySelector(".prev");
        const nextBtn = card.querySelector(".next");

        const scrollAmount = container.clientWidth;

        nextBtn.addEventListener("click", () => {
            container.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener("click", () => {
            container.scrollLeft -= scrollAmount;
        });
    });
});
