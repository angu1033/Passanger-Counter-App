//document.getElementById("count-el").innerText=5;
let saveEl = document.getElementById("save-el");
let countEL = document.getElementById("count-el");
 
let count = 0;

function increment(){
    count +=1;
    countEL.innerText=count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEL.textContent = 0;
    count = 0;
}