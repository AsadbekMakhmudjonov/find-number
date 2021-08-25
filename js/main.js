var elInput = document.querySelector(".js-input");
var elOutput = document.querySelector(".js-output");
var elSubmitBtn = document.querySelector(".js-submit");
var elForm = document.querySelector(".js-form");
var elBadge = document.querySelector(".badge");

//
var target = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(target);
var counter = 6;
elBadge.textContent = counter;
elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var value = +elInput.value;
  if (counter === 0){
    elOutput.textContent = "lose";
    elOutput.classList.add("text-danger");

  }else if (value > target ) {
    elOutput.textContent = "decrease";
    counter -= 1;
  } else if (value < target){
    elOutput.textContent = "increase";
    counter -= 1;
  }else if (value === target) {
    elOutput.classList.add("text-success");
    elOutput.textContent = "win";

  }
  elBadge.textContent = counter;

})
