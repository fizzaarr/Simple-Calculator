let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let screen = document.getElementById("screen");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for(let i=0; i<btn.length; i++){
    btn[i].addEventListner("click",function(){
        if(this.innerHTML=="="){
            screen.innerHTML = eval(screen.innerHTML);
        }
        else{
            if(this.innerHTML=="clear "){
                screen.innerHTML="";
            }
            else{
                screen.innerHTML += this.innerHTML;
            }
        }

    });
}
toggleBtn.onclick = function(){
    body.classList.toggle("dark");
}