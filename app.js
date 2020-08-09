const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
   
    burger.addEventListener("click",() => {
        nav.classList.toggle("nav-active")
        if(nav.classList.contains("nav-active")){
            nav.classList.add('close')
            nav.classList.remove('close')
        }else{
            nav.classList.add('open')
            nav.classList.remove('open')
        }
    });
}

navSlide();
