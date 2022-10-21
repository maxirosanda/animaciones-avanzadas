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
