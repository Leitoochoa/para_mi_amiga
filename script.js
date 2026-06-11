function nextStep(id){

document.querySelectorAll(".screen")
.forEach(screen=>{
screen.classList.remove("active");
});

const target=document.getElementById(id);

if(target){
target.classList.add("active");
}

}

function wrong(){

const respuesta=document.getElementById("respuesta");

if(respuesta){
respuesta.innerHTML="😅 Inténtalo otra vez";
}

}

function correctQuiz(){

const respuesta=document.getElementById("respuesta");

respuesta.innerHTML="✨ Correcto";

setTimeout(()=>{
nextStep("estrella");
},1000);

}

function wrongStar(){

alert("⭐ Esa no es tu estrella");

}

function goodStar(){

alert("🌟 ¡Te encontré, mi estrellita!");

setTimeout(()=>{
nextStep("cartas");
},500);

}

function openLetter(element){

const content=
element.querySelector(".content");

if(content.style.display==="block"){
content.style.display="none";
}
else{
content.style.display="block";
}

}

window.onload=()=>{

document.querySelectorAll(".screen")
.forEach(screen=>{
screen.classList.remove("active");
});

document.getElementById("intro")
.classList.add("active");

};
