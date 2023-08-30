//let cows=50;
let helloworld = "Hello World";
//console.log(helloworld)
//alert(helloworld)
let umbrellas = (10 * 3);
let num = 5 + 1;
let string = ("Hello" + " " + "World");



function subtractio() {
    let inputvalue1 = document.getElementById("input1").value;
    let inputvalue2 = document.getElementById("input2").value;
    inputvalue1=parseInt(inputvalue1);
    inputvalue2=parseInt(inputvalue2);
    document.getElementById("display").innerHTML = inputvalue1 - inputvalue2;
    alert(inputvalue1 + "  | " + inputvalue2);
}
function su() {
    
    let inputvalue1 = document.getElementById("input1").value;
    let inputvalue2 = document.getElementById("input2").value;
    inputvalue1=parseInt(inputvalue1);
    inputvalue2=parseInt(inputvalue2);
    document.getElementById("display").innerHTML = inputvalue1 + inputvalue2;
}
function multiplicatio() {
    let inputvalue1 = document.getElementById("input1").value;
    let inputvalue2 = document.getElementById("input2").value;
    inputvalue1=parseInt(inputvalue1);
    inputvalue2=parseInt(inputvalue2);
    document.getElementById("display").innerHTML = inputvalue1 * inputvalue2;
}
function Divisio() {
    let inputvalue1 = document.getElementById("input1").value;
    let inputvalue2 = document.getElementById("input2").value;
    inputvalue1=parseInt(inputvalue1);
    inputvalue2=parseInt(inputvalue2);
    document.getElementById("display").innerHTML = inputvalue1 / inputvalue2;
}