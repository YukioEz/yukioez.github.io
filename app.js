const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    let active = false
    
    function open(){
        nav.classList.toggle('open')
    }
    function close(){
        nav.classList.toggle('close')
    }
    burger.addEventListener("click",() => {
        nav.classList.toggle("nav-active")
        nav.classList.toggle('open close')
    });
}

navSlide();
