let btn = document.querySelector("button")
let predict=document.querySelector(".prediction")

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
setTimeout(function(){
    btn.style.display = "none"
    predict.innerText = "you will become ambani!!!!!"

},5000)