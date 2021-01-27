//scroll to top
const scrolltop = document.querySelector('#scrolltop');
scrolltop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

//scroll yapınca sectionlar altta kaldıysa opacity=0 olsun
window.addEventListener('scroll', function () {
    if (window.scrollY >= 700) {
        scrolltop.style.opacity = 1;
    } else {
        scrolltop.style.opacity = 0;
    }
});

//theme ayarları arka plan renk

const themeToggles = document.querySelectorAll(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");
if (darkmode) {
    body.classList.add("dark");
    themeToggles.forEach(themeToggle => {
        themeToggle.checked = true;
    })
}

themeToggles.forEach(themeToggle => {
    themeToggle.addEventListener("change", function () {
        body.classList.toggle('dark');
    
        if (body.classList.contains("dark")) {
            localStorage.setItem("dark", "active");
        } else {
            localStorage.removeItem("dark")
        }
    });
})

const btnopenmenu = document.getElementById('btn-open-menu');
const responsiveNav = document.querySelector('.responsive-menu');
const backdrop = document.querySelector('.backdrop');
const closeMenu = document.querySelector('.close-responsive-menu');



btnopenmenu.addEventListener('click', () => {
        responsiveNav.classList.add("show")
        backdrop.style.display = "block"
        closeMenu.style.display = "block"
})

closeMenu.addEventListener('click', () => {
    responsiveNav.classList.remove("show")
    backdrop.style.display = "none"
    closeMenu.style.display = "none"
})


backdrop.addEventListener('click', () => {
    responsiveNav.classList.remove("show")
    backdrop.style.display = "none"
    closeMenu.style.display = "none"
})
