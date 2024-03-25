const menuListToggler = document.querySelector('.btn--toggler');

menuListToggler.addEventListener("click", () => {
    const items = document.querySelector(".list");
    items.classList.toggle("navbar__item-collapse");
});