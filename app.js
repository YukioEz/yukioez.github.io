const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
   
    burger.addEventListener("click",() => {
        nav.classList.toggle("nav-active")
        nav.style.animation = "navactiveFade 2s 2s forward"
    });
}

navSlide();
