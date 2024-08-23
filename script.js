let eye1 = document.querySelector('.eye1')
let eye2 = document.querySelector('.eye2')
const body = document.querySelector("#body")
const password = document.querySelector("#password")
let image_container = document.querySelector(".image_container")


body.addEventListener("mousemove",() =>{
    const x = event.clientX / 90
    const y = event.clientY / 30
     
    eye1.style.top = 55 + y + "px"
    eye1.style.right = 45 + (-x) +  "px"
    eye2.style.top = 100 +y +  "px"
    eye2.style.right = 95 +(-x)+ "px"

})
password.addEventListener("focus", ()=>{
    image_container.style.transform = "translateX(190px)"
})
password.addEventListener("focusout", ()=>{
    image_container.style.transform = "translateX(0px)"
})

