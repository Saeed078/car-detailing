let scrollElement = document.getElementById("scroll")
var menubtn = document.getElementById("menubtn") 
var menu = document.getElementById("menu")
var sidenav = document.getElementById("sidenav");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY
    let bodyHeight = document.body.clientHeight
    let innerWindowHeight = window.innerHeight
    let scrollPercent = Math.round((scrollTop / (bodyHeight - innerWindowHeight)) * 100)
    scrollElement.style.width = scrollPercent + "%"
    console.log(scrollPercent)
});

sidenav.style.right = "-200px"
menubtn.onclick = function(){
    if(sidenav.style.right == "-200px"){
        sidenav.style.right = "0"
        menu.src = "pic/close (1).png";
    }
    else{
        sidenav.style.right = "-200px"
        menu.src = "pic/menu (1).png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});