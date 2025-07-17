const preloader =  document.querySelector("[data-preloader]");
// for load when the internet become slowly
window.addEventListener("load",function(){
    preloader.classList.add("remove");
});


// add event on multibale element 


const addEventElements = function (element,eventType,callBack){
    for (let i = 0 , len = element.length; i < len ; i++) {        
        element[i].addEventListener(eventType,callBack)
    }
}

// navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay =document.querySelector("data-overlay");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}


addEventElements(navTogglers,"click",toggleNav);



// header

const header =document.querySelector("[data-header]");

window.addEventListener("scroll" , function(){
    header.classList[this.window.scrollY > 100 ? "add":"remove"]("active")
})
