const header = document.querySelector(".header-side");
const hamburger = document.querySelector("#menu-btn-side");
const navbar = document.querySelector("nav")
hamburger.addEventListener("click",()=>{
    // alert("Hellow world")

    header.classList.toggle("open");

});