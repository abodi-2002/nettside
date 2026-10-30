const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

document.querySelector("ul").classList.remove("active");

});

});

/* COUNTER */

let counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

let target = +counter.getAttribute("data-target");

let duration = 4200;

let startTime = null;

function animate(time){

if(!startTime) startTime = time;

let progress = time - startTime;

let value = Math.min(Math.floor(progress/duration * target), target);

if(counter.classList.contains("percent")){

counter.innerText = value + "%";

}

else{

counter.innerText = value + "+";

}

if(value < target){

requestAnimationFrame(animate);

}

}

requestAnimationFrame(animate);

});

/* NAVBAR SCROLL BEHAVIOR */

let lastScroll = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

let currentScroll = window.scrollY;

/* background change */

if(currentScroll > 50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

/* hide when scrolling down */

if(currentScroll > lastScroll && currentScroll > 80){

navbar.classList.add("hide");

}

/* show when scrolling up */

else if(currentScroll < lastScroll){

navbar.classList.remove("hide");

}

lastScroll = currentScroll;

});