function nextStep(id){

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"));

document.getElementById(id)
.classList.add("active");

}

function wrong(){

document.getElementById("respuesta")
.innerHTML="😅 Inténtalo otra vez.";

}

function correctQuiz(){

document.getElementById("respuesta")
.innerHTML="✨ Correcto.";

setTimeout(()=>{

nextStep("estrella");

},1200);

}

function wrongStar(){

alert("Esa no es tu estrella ⭐");

}

function goodStar(){

alert("🌟 ¡Te encontré, mi estrellita!");

setTimeout(()=>{

nextStep("cartas");

},500);

}

function openLetter(letter){

const content =
letter.querySelector(".content");

content.style.display =
content.style.display === "block"
? "none"
: "block";

}
