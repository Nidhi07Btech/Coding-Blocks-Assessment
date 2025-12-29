
const input = document.getelementbyclass("textBox")
const button1 = document. getelementbyclass("button 1")
const button2 = document.getelementbyclass("button 2")

function addthought(){
    const Value= input.value;
    thought.trim();

if(input === ""){
    alert(" Write your thought...");
}
    thought.push(thought);
    input.value="";
}
DocumentFragment.createElement("li");
function show(){
    const list = document.querySelector("ul");
    thought.forEach(function(thought){
        list.innerHTM = `<li>${thought}</li>`
    })
}
