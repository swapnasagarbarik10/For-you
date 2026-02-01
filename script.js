const text = "Shelley… will you bloom this universe with me?";
let i = 0;
const typing = document.getElementById("typing");

function typeEffect(){
  if(i < text.length){
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const song = document.getElementById("song");

noBtn.addEventListener("mouseenter",()=>{
  noBtn.style.transform = `translate(${Math.random()*200-100}px,${Math.random()*100-50}px)`;
});

yesBtn.addEventListener("click",()=>{
  scene1.style.opacity=0;
  setTimeout(()=>{
    scene1.classList.add("hidden");
    scene2.classList.remove("hidden");
    song.play();
  },1000);
});