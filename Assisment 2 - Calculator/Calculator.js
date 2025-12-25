let input = document.getElementbyclass("input");
let button = document.getElementbyclass("button");

let arr = Array.from(button);
arr.forEach(button =>{
  button.addEventListener("click", function(e){
    console.log("Event type",e.type );
    e.preventDefault();}
  });
  
