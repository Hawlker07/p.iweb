const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let current = 0;

slides.forEach((slide,index)=>{

    const dot=document.createElement("span");

    dot.classList.add("dot");

    if(index===0){

        dot.classList.add("active");

    }

    dot.onclick=()=>{

        current=index;

        showSlide();

        restart();

    };

    dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function showSlide(){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[current].classList.add("active");

    dots[current].classList.add("active");

}

document.querySelector(".next").onclick=()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide();

    restart();

}

document.querySelector(".prev").onclick=()=>{

    current--;

    if(current<0){

        current=slides.length-1;

    }

    showSlide();

    restart();

}

let autoplay;

function start(){

    autoplay=setInterval(()=>{

        current++;

        if(current>=slides.length){

            current=0;

        }

        showSlide();

    },5000);

}

function restart(){

    clearInterval(autoplay);

    start();

}

document.querySelector(".carousel").addEventListener("mouseenter",()=>{

    clearInterval(autoplay);

});

document.querySelector(".carousel").addEventListener("mouseleave",()=>{

    start();

});

showSlide();

start();