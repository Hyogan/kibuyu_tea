
const header = document.querySelector(".header-side");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav")
hamburger.addEventListener("click",()=>{
    // alert("Hellow world")

    header.classList.toggle("open");
    hamburger.classList.toggle("menu-btn-side");
    // if(hamburger.id)

});