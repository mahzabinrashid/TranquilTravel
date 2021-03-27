// navigation 
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".anav-links");
    const navLinks = document.querySelectorAll(".anav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("anav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });

}

navSlide();

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.anavbar').addClass("sticky");
        } else {
            $('.anavbar').removeClass("sticky");
        }
    });
})
