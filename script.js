
let boxIndex = 1;

function showBoxes(n) {
  let i;
  let boxes = document.getElementsByClassName("boxes");
  
  if (n > boxes.length) { boxIndex = 1; }
  if (n < 1) { boxIndex = boxes.length; }
  
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }
  
  boxes[boxIndex - 1].style.display = "block";
}

document.querySelector(".prev").addEventListener("click", function() {
  showBoxes(boxIndex -= 1);
});

document.querySelector(".next").addEventListener("click", function() {
  showBoxes(boxIndex += 1);
});

showBoxes(boxIndex);

 /*Hvorfor må det være let? */

let objectArray = [
  {car: "skoda", isGood: true},
  {car: "volkswage", isGood: true},
  {car: "audi", isGood: false},
]

let cars = objectArray.map(function (cars) {
 return cars.car;
});

console.log("first car type:", objectArray[0].car);


let cartype = objectArray.map((car) => car.car);

/*Hvorfor car.car, trodde det skulle være cars.car */

let i = 0;

function displayCars() {
  if (i < cartype.length) {
    let displayContent = `
      <p>Car 1: ${cartype[i]}</p>
      <p>Car 2: ${cartype[i + 1]}</p>
    `;
    
    document.getElementsByClassName('sections')[0].innerHTML = displayContent;
    i += 2;
  } else {
    clearInterval(intervalId);
    document.getElementsByClassName('sections')[0].innerHTML =
      '<p>No more cars to show.</p>';
  }
}


let intervalId = setInterval(displayCars, 6000);

displayCars();