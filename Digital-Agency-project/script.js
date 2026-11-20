const buttons = document.querySelector(".buttons")
const burger = document.querySelector("#burger")
const closeBtn = document.querySelector("#close")
const mobileList = document.querySelector(".mobile-list")

buttons.addEventListener("click", function(){
    burger.classList.toggle("hide")
    closeBtn.classList.toggle("hide")
    mobileList.classList.toggle("show-mobile")
})