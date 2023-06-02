var icon = document.getElementById("icon");
var smscreen = document.getElementById("smlogo")
var elemek = document.getElementsByClassName("nav-item");
let theme = localStorage.getItem("data-theme");
var cappuccino = document.getElementById("cappuccino");
var esspresso = document.getElementById("esspresso");
var latte = document.getElementById("latte");
let idozito = null;

icon.onclick = function(){
    document.body.classList.toggle("sotet");
    if(document.body.classList.contains("sotet")){
        icon.src = "kepek/sun.jpg";
        icon.style.filter = "invert(1)"
        localStorage.setItem("data-theme", "dark");
    }else{
        icon.src = "kepek/moon.png";
        icon.style.filter = "invert(0)"
        localStorage.setItem("data-theme", "light");
    }
}
smscreen.onclick = function(){
    document.getElementById("nav").classList.toggle("show");
    for(let i = 0; i < elemek.length; i++){
        elemek[i].classList.toggle("show");
    }
}
function showsm() {
    var width = window.innerWidth;
    if(width > 700){
        document.getElementById("nav").classList.remove("show");
    for(let i = 0; i < elemek.length; i++){
        elemek[i].classList.remove("show");
    }
    }
}
const container = document.body;
    if(localStorage.getItem("data-theme")){
    container.setAttribute("data-theme",localStorage.getItem("data-theme")); 
    toggleDark(1)
} 

function toggleDark(r) {
    const dataTheme = container.getAttribute("data-theme");
    let theme_switch;
    if(dataTheme === "light") {theme_switch = 1} else {theme_switch = 0}
    if(r){theme_switch = !theme_switch}
    if (theme_switch) {
        container.setAttribute("data-theme", "dark");
        document.body.classList.toggle("sotet");
        localStorage.setItem("data-theme", "dark");
} else {
        container.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
}
}

function galeria(szam){
    if (szam == 1){
        cappuccino.style.transform = 'translateX(0%)';
        esspresso.style.transform = 'translateX(0%)';
        latte.style.transform = 'translateX(0%)';
    } else if (szam == 2){
        cappuccino.style.transform = 'translateX(-100%)';
        esspresso.style.transform = 'translateX(-100%)';
        latte.style.transform = 'translateX(-100%)';
    } else {
        cappuccino.style.transform = 'translateX(-200%)';
        esspresso.style.transform = 'translateX(-200%)';
        latte.style.transform = 'translateX(-200%)';
    }
        
}

function startIdozito() {
    idozito = setInterval(function() {
      if (cappuccino.style.transform === 'translateX(0%)'){
        cappuccino.style.transform = 'translateX(-100%)';
        esspresso.style.transform = 'translateX(-100%)';
        latte.style.transform = 'translateX(-100%)';
      } else if (cappuccino.style.transform === 'translateX(-100%)'){
        cappuccino.style.transform = 'translateX(-200%)';
        esspresso.style.transform = 'translateX(-200%)';
        latte.style.transform = 'translateX(-200%)';
      } else {
        cappuccino.style.transform = 'translateX(0%)';
        esspresso.style.transform = 'translateX(0%)';
        latte.style.transform = 'translateX(0%)';
      }
    }, 3000);
  }
  
  function resetIdozito() {
    clearInterval(idozito);
    startIdozito();
  }
  
  startIdozito();
  

showsm();

window.addEventListener("resize", showsm)