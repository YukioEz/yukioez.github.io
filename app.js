const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    
    burger.addEventListener("click",() => {
        nav.classList.toggle('nav-active')
        nav.classList.toggle('open', true)
        nav.classList.toggle('close', true)
    });
}

navSlide();
