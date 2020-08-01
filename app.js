const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navlinks = document.querySelectorAll(".nav-links li")
    const navactive = document.querySelector(".nav-links.nav-active" )
    burger.addEventListener("click",() => {
        nav.classList.toggle("nav-active")

        
    });
    navlinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}`
    });
}

navSlide();
