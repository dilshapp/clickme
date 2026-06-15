let btn = document.querySelector("button")

let moved = false

btn.addEventListener("mouseover" ,function(){
    if(!moved){
        btn.style.marginLeft = "250px"
        moved = true
    }else{
        btn.style.marginLeft = "0px"
        moved = false
    }


})