function resizeButtonPeople() {
   let buttons = document.getElementsByClassName('button-people');
   
   for(let button of buttons) {
    button.style.width = "auto";
  }
  for(button of buttons) {
    if(button.offsetWidth > width) {
      width = button.offsetWidth;
    }
  }
}
for (let button of buttons) {
  button.style.width= `${width+1}px;`
}


window.onload = function() {
  resizeButtonPeople();
}