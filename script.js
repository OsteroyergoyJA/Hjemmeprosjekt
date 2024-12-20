
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


