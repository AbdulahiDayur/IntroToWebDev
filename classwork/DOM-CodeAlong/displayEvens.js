var firstNum = document.getElementById("numStart")
var lastNum = document.getElementById("numEnd")
var numStepper = document.getElementById("numStep")
var btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
  document.querySelector("p").textContent += ` ${firstNum.value} and ${lastNum.value} by ${numStepper.value}'s:`
  for (let i = Number(firstNum.value); i < Number(lastNum.value); i += Number(numStepper.value)) {
    if (i % 2 == 0) {
      var ul = document.getElementById("result")
      var li = document.createElement("li")
      li.innerHTML = i
      ul.appendChild(li)
    }
  }
  // console.log(typeof Number(firstNum.value))
  // console.log(lastNum.value)
  // console.log(numStepper.value)
})
