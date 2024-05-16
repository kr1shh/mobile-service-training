document.addEventListener("DOMContentLoaded",()=>{


    const ham_icon = document.querySelector(".nav_container .nav_ham");
    const ham_els = document.querySelectorAll(".nav_container .nav_ham div");
    const mob_nav_links = document.querySelector(".nav_container .mob_nav_links");

    ham_icon.addEventListener("click",()=>{
        ham_els.forEach(el=>{
            el.classList.toggle("open");
        })
        mob_nav_links.classList.toggle("open");
    })


})