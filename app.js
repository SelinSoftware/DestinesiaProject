//scroll to top
const scrolltop=document.querySelector('#scrolltop');
scrolltop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
});

//scroll yapınca sectionlar altta kaldıysa opacity=0 olsun
window.addEventListener('scroll',function(){
    if(window.scrollY>=700){
        scrolltop.style.opacity=1;
    }else{
        scrolltop.style.opacity=0;
    }
});

//theme ayarları arka plan renk

const themeToggle=document.querySelector(".checkbox");
const body=document.querySelector("body");
const darkmode=localStorage.getItem("dark");
if(darkmode){
    body.classList.add("dark");
    themeToggle.checked=true;
}

themeToggle.addEventListener("change", function(){
    body.classList.toggle('dark');

    if(body.classList.contains("dark")){
        localStorage.setItem("dark", "active");
    }else{
        localStorage.removeItem("dark")
    }
});

