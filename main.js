window.onscroll=function(){
    landingPageScroll()
}
const landingPageScroll=()=>{
    mainNav.style.transition= "3000ms"
    mainNav.style.background= "transparent"
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        mainNav.style.background= "rgba(25, 21, 46, 0.900)";
    }
    else {}
}
const openOffcanvas =()=>{
    document.getElementById("overlayOffcanvas").style.width = "80%";
    document.getElementById("overlayOffcanvas").style.height = "100%";
    document.getElementById("overlayOffcanvas").style.left = "10%";
    document.getElementById("overlayOffcanvas").style.right = "10%";
    document.getElementById("overlayOffcanvas").style.opacity = "100%";
    document.getElementById("closeicon").style.display = "block";
    document.getElementById("openicon").style.display = "none";
    document.getElementById("mainNav").style.background = "rgba(25, 21, 46, 0.990)";

    if (document.getElementById("overlayOffcanvas").style.height = "100%") {
        mainNav.style.background= "rgba(25, 21, 46, 0.990)";
    }
 }
 
 const closeOffcanvas =()=>{
    document.getElementById("overlayOffcanvas").style.width = "0";
    document.getElementById("overlayOffcanvas").style.height = "0";
    document.getElementById("overlayOffcanvas").style.opacity = "0";
    document.getElementById("openicon").style.display = "block";
    document.getElementById("closeicon").style.display = "none";
    document.getElementById("mainNav").style.background = "rgba(0, 0, 0, 0)";
    if (document.getElementById("overlayOffcanvas").style.height = "100%") {
        mainNav.style.background= "rgba(25, 21, 46, 0.990)";
    }
 }