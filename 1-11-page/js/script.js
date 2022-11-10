
let topButton=document.getElementById("totop");
topButton.addEventListener("click",topFunction);
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.documentElement.scrollTop>10){
        topButton.setAttribute("style","display:block;")

    }
    else{
        topButton.setAttribute("style","display:none;")
    }
}

function topFunction(){
    document.documentElement.scrollTop=0;

}
