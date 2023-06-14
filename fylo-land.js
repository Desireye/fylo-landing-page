const getStartedBtn = document.getElementById("get-started-btn")
const checkEl = document.getElementById("check-el")
const emailInput = document.getElementById("email-input")

const getStartedBtn2 = document.getElementById("get-started-btn-2")
const checkEl2 = document.getElementById("check-el-2")
const emailInput2 = document.getElementById("email-input-2")

getStartedBtn.addEventListener("click", function() {
    checkEl.textContent = "Please check your e-mail"
})

getStartedBtn2.addEventListener("click", function() {
    checkEl2.textContent = "Please check your e-mail"
})