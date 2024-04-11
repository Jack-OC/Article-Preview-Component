const card = document.querySelector(".article-card");
const footer = document.querySelector(".card-footer");
const share_btn = document.querySelector(".share-btn");
const tooltip = document.querySelector(".tooltip");

share_btn.addEventListener("click", function() {
    footer.classList.toggle('open')
    tooltip.classList.toggle("hidden");
    share_btn.classList.toggle("share-btn--active");
});
