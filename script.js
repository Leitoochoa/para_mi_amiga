function nextStep(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.add("active");
    } else {
        console.error("No existe la sección:", id);
    }

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
