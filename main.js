window.onscroll=function(){
    landingPageScroll()
}
const landingPageScroll=()=>{
    mainNav.style.transition= "3000ms"
    mainNav.style.background= "transparent"
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        mainNav.style.background= "rgba(0, 0, 0, 0.900)";
    }
    else {}
}
const openOffcanvas =()=>{
    document.getElementById("overlayOffcanvas").style.width = "100%";
    document.getElementById("overlayOffcanvas").style.height = "100%";
    document.getElementById("overlayOffcanvas").style.opacity = "100%";
    document.getElementById("closeicon").style.display = "block";
    document.getElementById("openicon").style.display = "none";
 }
 
 const closeOffcanvas =()=>{
    document.getElementById("overlayOffcanvas").style.width = "0";
    document.getElementById("overlayOffcanvas").style.height = "0";
    document.getElementById("overlayOffcanvas").style.opacity = "0";
    document.getElementById("openicon").style.display = "block";
    document.getElementById("closeicon").style.display = "none";
 }