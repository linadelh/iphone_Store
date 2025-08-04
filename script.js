
let yellow = document.getElementById("yellow");
let black = document.getElementById("black");
let red = document.getElementById("red");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");


let mainphone = document.getElementById("main")
let container = document.querySelectorAll(".container");


black.addEventListener("click" , function(){
    mainphone.src ="img/2.png" ; 
      container.forEach((item)=>
       item.style.background ="#2e2e2eff");
});

yellow.addEventListener("click" , function(){
    mainphone.src ="img/0.png" ; 
     container.forEach((item)=>
       item.style.background ="#000");
    
});
purple.addEventListener("click" , function(){
    mainphone.src ="img/1.png" ; 
       container.forEach((item)=>
       item.style.background ="#247eC8");
    
});
pink.addEventListener("click" , function(){
    mainphone.src ="img/3.png" ; 
      container.forEach((item)=>
       item.style.background ="#d7c4d1ff");
});

red.addEventListener("click" , function(){
    mainphone.src ="img/4.png" ; 
      container.forEach((item)=>
       item.style.background ="#c82525");
});

