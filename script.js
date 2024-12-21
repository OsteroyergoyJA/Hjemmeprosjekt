
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

/* Hvorfor må det være let? */

let objectArray = [
  {car: "skoda", isGood: true},
  {car: "volkswage", isGood: true},
  {car: "audi", isGood: false},
]

let cars = objectArray.map(function (cars) {
 return cars.car;
});

console.log("first car type:", objectArray[0].car);



/* let names = arrayDetails.map((person) => person.name);

let i = 0;

function displayNames() {
  if (i < names.length) {
    let displayContent = `
    <p>Name 1: ${names[i]}</p>
    <p>Name 2: ${names[i + 1]}</p>
`;

    document.getElementById('names-list').innerHTML = displayContent;
    i += 2;
  } else {
    clearInterval(intervalId);
    document.getElementById('names-list').innerHTML =
      '<p>No more names to show.</p>';
  }
}

let intervalId = setInterval(displayNames, 6000);

displayNames();
*/ 