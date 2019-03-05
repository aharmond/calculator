var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')
var zero = document.getElementById('0')

var plus = document.getElementById('Add')
var minus = document.getElementById('Subtract')
var multiply = document.getElementById('Multiply')
var divide = document.getElementById('Divide')
var equals = document.getElementById('Equals')

var decimal = document.getElementById('Decimal')
var valence = document.getElementById('PlusMinus')
var percent = document.getElementById('Percent')
var clear = document.getElementById('AC')

var screen = document.getElementById('screen')
var error = document.getElementById('error')

var leftHand = ""
var rightHand = ""
var middleHand = ""

one.addEventListener("click", function(){
  integerChoice(this)
})
two.addEventListener("click", function(){
  integerChoice(this)
})
three.addEventListener("click", function(){
  integerChoice(this)
})
four.addEventListener("click", function(){
  integerChoice(this)
})
five.addEventListener("click", function(){
  integerChoice(this)
})
six.addEventListener("click", function(){
  integerChoice(this)
})
seven.addEventListener("click", function(){
  integerChoice(this)
})
eight.addEventListener("click", function(){
  integerChoice(this)
})
nine.addEventListener("click", function(){
  integerChoice(this)
})
zero.addEventListener("click", function(){
  integerChoice(this)
})

plus.addEventListener("click", function(){
  operatorChoice(this)
})
minus.addEventListener("click", function(){
  operatorChoice(this)
})
multiply.addEventListener("click", function(){
  operatorChoice(this)
})
divide.addEventListener("click", function(){
  operatorChoice(this)
})
equals.addEventListener("click", function(){
  evaluateChoice(this)
})

decimal.addEventListener("click", function(){
  decimalChoice(this)
})
clear.addEventListener("click", function(){
  leftHand = ""
  rightHand = ""
  middleHand = ""
  screen.innerHTML = "0"
  error.innerHTML = ""
})


function integerChoice(integer) {
  if(leftHand === "") {
    leftHand = integer.innerHTML
    screen.innerHTML = leftHand
  }
  else if(leftHand !== "" && middleHand === "") {
    leftHand = leftHand + integer.innerHTML
    screen.innerHTML = leftHand
  }
  else if(middleHand !== "") {
    if(middleHand === "/" && integer.innerHTML === "0") {
      error.innerHTML = "Can't divide by zero."
    }
    else {
      rightHand = rightHand + integer.innerHTML
      screen.innerHTML = leftHand + middleHand + rightHand
    }
  }
  else {
    error.innerHTML = "Please complete the current operation or reset."
  }
}

function operatorChoice(operator) {
  if(leftHand === "") {
    error.innerHTML = "Please enter an integer."
  }
  else if(middleHand === "") {
    middleHand = operator.innerHTML
    screen.innerHTML = leftHand + middleHand
  }
  else if(rightHand === "") {
    error.innerHTML = "Please enter an integer."
  }
  else {
    error.innerHTML = "Please complete the current operation or reset."
  }
}

function evaluateChoice(equal) {
  if(leftHand === "" | middleHand === "" | rightHand === ""){
    error.innerHTML = "Please fill out the current operation."
  }
  else {
    screen.innerHTML = eval(screen.innerHTML)
    leftHand = screen.innerHTML
    middleHand = ""
    rightHand = ""
  }
}

function decimalChoice(decimal) {
  if(leftHand.includes('.')) {
    if(middleHand === "") {
      error.innerHTML = "Please enter an operator."
    }
    else if(rightHand === "") {
      error.innerHTML = "Please enter an integer."
    }
    else if(rightHand.includes('.')) {
      error.innerHTML = "Please complete current operation."
    }
    else {
      rightHand = rightHand + decimal.innerHTML
    }
  }
  else {
    if(leftHand === "") {
      error.innerHTML = "Please enter an integer."
    }
    else if(leftHand !== "" && middleHand === ""){
      leftHand = leftHand + decimal.innerHTML
    }
  }
}