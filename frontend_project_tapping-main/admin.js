const logoutBtn = document.getElementById("logout_button");
const testTappingBtn = document.getElementById("test_tapping");
const popup = document.getElementById("logoutPopup");
const cancel = document.getElementById("cancelLogout");
const $confirm = document.getElementById("confirmLogout");
const tappingPopup = document.getElementById("tappingPopup");

testTappingBtn.onclick = () => (alert("Tapping Berhasil!"));
logoutBtn.onclick = () => (popup.style.display = "block");
cancel.onclick = () => (popup.style.display = "none");
$confirm.onclick = () => alert("Logout");
const menuBtn = document.getElementById("menu_button");
const sidebar = document.getElementById("sidebar");
const main = document.querySelector(".main");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    main.classList.toggle("full");
});

const links = document.querySelectorAll(".sidebar a");
const pages = document.querySelectorAll(".page");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.dataset.page;

        // hide semua halaman
        pages.forEach((page) => (page.style.display = "none"));

        // show halaman target
        document.getElementById(target).style.display = "block";

        // aktifin menu
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});