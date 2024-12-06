let mobileMenu = document.querySelector(".mobile-menu");
let menu = document.querySelector(".menu");

mobileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("active");
});

document.addEventListener("click",()=>{
    menu.classList.remove("active");
})