const main=document.querySelector("main");
const btn=document.querySelector("button");
const timer=document.querySelector("#timer");
const box=document.createElement("div");
const overlay=document.querySelector("#overlay");
const score=document.querySelector("#score");
box.classList.add("box");
let time=0;
let score_count=0;
let interval;
const randomColor=()=>{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
const randomBox=()=>{
box.style.backgroundColor=randomColor();
time+=1;
let mainH=main.clientHeight-box.offsetHeight;
let mainW=main.clientWidth-box.offsetWidth;
const rY=Math.random()*mainH;
const rX=Math.random()*mainW;
box.style.top=`${rY}px`;
box.style.left=`${rX}px`;
timer.textContent=time;
}
btn.addEventListener("click",()=>{
    main.append(box);
    clearInterval(interval);
    interval=setInterval(()=>{
    randomBox();
    },1000);
    setTimeout(()=>{
    clearInterval(interval);
    overlay.style.display="flex";
    },10000);
})
box.addEventListener("click",()=>{
    score_count+=1;
    score.textContent=score_count;
})