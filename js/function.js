function loadDom () {
const menuOpen = document.getElementById ("links");
const buttonHamburger = document.getElementById ("hamburger");
buttonHamburger.addEventListener("click", () => {
    buttonHamburger.classList.toggle("close");
    menuOpen.classList.toggle("open");
});
menuOpen.addEventListener("click", e => {
    if (e.target.id === "links") {
        menuOpen.classList.toggle("open");
        buttonHamburger.classList.remove("close");
    }
});
}
window.addEventListener("load", loadDom)
