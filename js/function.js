const buttonHamburger = document.getElementById("hamburger");
const navBar = document.getElementById("barnav")

navBar.onclick = () => {
    buttonHamburger.classList.toggle("open");
    navBar.classList.toggle("close") 
};