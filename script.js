/* ===================================
   CONTADOR DE ESTRELLAS
=================================== */

let starsCollected = 0;

function addStar(points = 1){

    starsCollected += points;

    const counter = document.getElementById("starCount");

    if(counter){
        counter.textContent = starsCollected;
    }

}

/* ===================================
   CAMBIO DE PANTALLAS
=================================== */

function nextStep(id){

    document.querySelectorAll(".screen")
    .forEach(screen=>{
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.add("active");
        window.scrollTo(0,0);
    }

}

/* ===================================
   QUIZ
=================================== */

function wrong(){

    const respuesta =
    document.getElementById("respuesta");

    if(respuesta){

        respuesta.innerHTML =
        "😅 Inténtalo otra vez";

    }

}

function correctQuiz(){

    const respuesta =
    document.getElementById("respuesta");

    respuesta.innerHTML =
    "✨ Correcto, esa es la respuesta";

    addStar(2);

    createCelebration();

    setTimeout(()=>{

        nextStep("estrella");

    },1200);

}

/* ===================================
   JUEGO ESTRELLA
=================================== */

function wrongStar(){

    alert("⭐ Esa no es tu estrella");

}

function goodStar(){

    addStar(3);

    createCelebration();

    alert("🌟 ¡Te encontré, mi estrellita!");

    setTimeout(()=>{

        nextStep("cartas");

    },500);

}

/* ===================================
   CARTAS
=================================== */

function openLetter(element){

    const content =
    element.querySelector(".content");

    if(content.style.display === "block"){

        content.style.display = "none";

    }else{

        content.style.display = "block";

        addStar(1);

    }

}

/* ===================================
   LIGHTBOX FOTOS
=================================== */

function setupGallery(){

    const images =
    document.querySelectorAll(".photo-card img");

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImg =
    document.getElementById("lightboxImg");

    const close =
    document.getElementById("closeLightbox");

    images.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

            addStar(1);

        });

    });

    if(close){

        close.addEventListener("click",()=>{

            lightbox.style.display = "none";

        });

    }

    if(lightbox){

        lightbox.addEventListener("click",(e)=>{

            if(e.target === lightbox){

                lightbox.style.display = "none";

            }

        });

    }

}

/* ===================================
   ESTRELLAS CAYENDO
=================================== */

function createStar(){

    const star =
    document.createElement("div");

    star.className = "star-fall";

    star.innerHTML =
    Math.random() > 0.5 ? "⭐" : "✨";

    star.style.left =
    Math.random()*100 + "vw";

    star.style.fontSize =
    (Math.random()*12 + 12) + "px";

    star.style.animationDuration =
    (Math.random()*5 + 4) + "s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },10000);

}

function startStars(){

    setInterval(()=>{

        createStar();

    },400);

}

/* ===================================
   CELEBRACIÓN
=================================== */

function createCelebration(){

    for(let i=0;i<15;i++){

        const sparkle =
        document.createElement("div");

        sparkle.innerHTML =
        Math.random() > 0.5 ? "✨" : "⭐";

        sparkle.style.position = "fixed";

        sparkle.style.left =
        Math.random()*100 + "vw";

        sparkle.style.top =
        Math.random()*100 + "vh";

        sparkle.style.fontSize =
        (Math.random()*15 + 15) + "px";

        sparkle.style.pointerEvents =
        "none";

        sparkle.style.zIndex = "999";

        document.body.appendChild(sparkle);

        sparkle.animate(

        [
            {
                opacity:1,
                transform:"scale(1)"
            },

            {
                opacity:0,
                transform:"scale(2)"
            }

        ],

        {
            duration:1000
        }

        );

        setTimeout(()=>{

            sparkle.remove();

        },1000);

    }

}

/* ===================================
   MENSAJE FINAL
=================================== */

function showFinalMessage(){

    if(starsCollected >= 10){

        alert(
        "🌻✨ ¡Has completado la aventura de Mi Estrellita! ✨🌻"
        );

    }

}

/* ===================================
   BOTÓN FINAL
=================================== */

document.addEventListener("click",(e)=>{

    if(
        e.target &&
        e.target.innerText &&
        e.target.innerText.includes("Abrir Sorpresa")
    ){

        setTimeout(()=>{

            showFinalMessage();

        },500);

    }

});

/* ===================================
   INICIO
=================================== */

window.onload = ()=>{

    document
    .querySelectorAll(".screen")
    .forEach(screen=>{

        screen.classList.remove("active");

    });

    document
    .getElementById("intro")
    .classList.add("active");

    setupGallery();

    startStars();

};
