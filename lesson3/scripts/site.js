// This sets the year for the footer

const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// Hamburger menu
function toggleMenu() {
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
}

document.querySelector("#hamburger-menu").onclick = toggleMenu;