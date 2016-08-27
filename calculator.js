//step 1
var memory = []

addListeners(document.getElementsByClassName('board')[0].children)

function addListeners (element) {

  for (var i = 0; i < element.length; i++) {

    element[i].addEventListener('click', updateMemory)

    element[i].addEventListener('click', readout)

    element[i].addEventListener('click', equals)

    element[i].addEventListener('click', allClear)
  }
}


//step 2
function readout (event) {

  if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {

    document.getElementsByClassName('display')[0].innerHTML += event.target.innerHTML

  }
}


//step 3
function updateMemory (event) {

  if (event.target.classList.contains('number')) {

    memory.push(event.target.innerHTML)

  } else if (event.target.classList.contains('operator')) {

    memory.push(event.target.innerHTML)
  }
}


//step 4
function equals (event) {

  if (event.target.classList.contains('equals')) {

    var result = eval(memory.join(''))

    document.getElementsByClassName('display')[0].innerHTML = result

    memory = [result]
  }
}


// step 5
function allClear (event) {

  if (event.target.classList.contains('all-clear')) {

    document.getElementsByClassName('display')[0].innerHTML =

    memory = []
  }
}
