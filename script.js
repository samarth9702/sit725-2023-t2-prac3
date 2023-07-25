function changeText(){
    var textsArray = ["Cat","Bat","Hat","Ant","Mat"];
    var number = getRandomNumber(0,textsArray.length-1);
    document.getElementById("changeHeading").innerHTML = textsArray[number];
    document.getElementById("heading").innerHTML = "Magic";
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function add(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    window.location.assign("/addTwoNumbers?num1=" + num1 + "&num2=" + num2);
    // window.open("/addTwoNumbers?num1=" + num1 + "&num2=" + num2);
}

function sub(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    window.location.assign("/subTwoNumbers?num1=" + num1 + "&num2=" + num2);
}

function mul(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    window.location.assign("/mulTwoNumbers?num1=" + num1 + "&num2=" + num2);
}

function div(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    // window.location.replace("/divTwoNumbers?num1=" + num1 + "&num2=" + num2);
    window.location.assign("/divTwoNumbers?num1=" + num1 + "&num2=" + num2);
}