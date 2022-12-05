for (let index = 1; index <= 5; index++) {
    
    document.querySelector(`.navbar ul li:nth-child(${index}) a`).addEventListener('click',function(event){
        event.preventDefault()
        document.querySelector(".navbar ul div").style.right = `${81 * (5 - index) + 5 }px`
    })
    
}

let count = 0
document.querySelector(".shopping button").addEventListener("click",function(){
    count++
    let element = document.querySelector("#counter")
    element.innerText = count;
    element.classList.remove("animate")
    element.offsetWidth; 
    element.classList.add("animate");
})

let element = document.querySelector(".navbar2 ul")
document.querySelector(".navbar2 .menu").addEventListener("click",function(){
    
    if(element.className == "show"){ 
        element.classList.add("hidden");
        element.classList.remove("show")
    }else{
        element.classList.add("show");
        element.classList.remove("hidden");
    }
 
})
window.addEventListener('resize',function(){
    if (window.screen.width > 578){
        element.classList.remove("hidden")
        element.classList.remove("show")
    }
})
    

   
  

