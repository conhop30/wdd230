// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// Meet and Greet banner
var messagedate = new Date();

if (messagedate.getDay()==1 || messagedate.getDay()==2) {
    document.querySelector("#meet-greet").classList.add('active');
}

// Hamburger menu
function toggleMenu() {
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
}

document.querySelector("#hamburger-menu").onclick = toggleMenu;