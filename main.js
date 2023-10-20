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
// const openOffcanvas =()=>{
    
// }