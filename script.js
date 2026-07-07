/* =====================================================
   PREMIUM PROPOSAL WEBSITE
   SCRIPT.JS
===================================================== */

"use strict";

/* ============================
   DOM
============================ */

const loader = document.getElementById("loader");

const typing = document.getElementById("typing");

const cursor = document.getElementById("cursor");

const navbar = document.querySelector("header");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const proposalYes = document.getElementById("proposalYes");

const proposalNo = document.getElementById("proposalNo");

/* ============================
   LOADER
============================ */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

});

/* ============================
   TYPEWRITER EFFECT
============================ */

const message =
"I never believed in destiny until I met you. Every heartbeat, every smile, every dream feels complete with you. ❤️";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();

/* ============================
   CUSTOM CURSOR
============================ */

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* ============================
   NAVBAR EFFECT
============================ */

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background =
        "rgba(0,0,0,.45)";

        navbar.style.backdropFilter =
        "blur(20px)";

    }

    else {

        navbar.style.background =
        "rgba(0,0,0,.15)";

    }

});

/* ============================
   SMOOTH SCROLL
============================ */

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ============================
   HERO YES BUTTON
============================ */

yesBtn.addEventListener("click", () => {

    alert("❤️ Thank You! ❤️");

});

/* ============================
   HERO NO BUTTON
============================ */

noBtn.addEventListener("mouseenter", () => {

    const x =
    Math.random() *
    (window.innerWidth - 180);

    const y =
    Math.random() *
    (window.innerHeight - 80);

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

});

/* ============================
   PROPOSAL BUTTONS
============================ */

proposalYes.addEventListener("click", () => {

    alert("💍 She Said YES ❤️");

});

proposalNo.addEventListener("mouseenter", () => {

    const x =
    Math.random() *
    (window.innerWidth - 180);

    const y =
    Math.random() *
    (window.innerHeight - 80);

    proposalNo.style.position = "fixed";

    proposalNo.style.left = x + "px";

    proposalNo.style.top = y + "px";

});


/* =====================================================
   STARS + HEARTS + PETALS + SPARKLES
===================================================== */

"use strict";

/* ==========================
   CONTAINERS
========================== */

const starsContainer = document.querySelector(".stars");
const heartsContainer = document.querySelector(".hearts");
const petalsContainer = document.querySelector(".petals");

/* ==========================
   STARS
========================== */

function createStars(){

    if(!starsContainer) return;

    for(let i=0;i<300;i++){

        const star=document.createElement("span");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=
        Math.random()*5+"s";

        star.style.animationDuration=
        (2+Math.random()*4)+"s";

        starsContainer.appendChild(star);

    }

}

createStars();

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    if(!heartsContainer) return;

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.bottom="-40px";

    heart.style.fontSize=
    (16+Math.random()*35)+"px";

    heart.style.animationDuration=
    (5+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,450);

/* ==========================
   ROSE PETALS
========================== */

function createPetal(){

    if(!petalsContainer) return;

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"%";

    petal.style.top="-50px";

    petal.style.animationDuration=
    (7+Math.random()*5)+"s";

    petal.style.opacity=
    0.4+Math.random()*0.6;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,300);

/* ==========================
   SPARKLES
========================== */

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=
    Math.random()*window.innerWidth+"px";

    sparkle.style.top=
    Math.random()*window.innerHeight+"px";

    sparkle.style.animationDuration=
    (1+Math.random()*2)+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createSparkle,250);

/* ==========================
   STAR PARALLAX
========================== */

document.addEventListener("mousemove",(e)=>{

    const stars=document.querySelectorAll(".star");

    const moveX=(e.clientX/window.innerWidth)*8;
    const moveY=(e.clientY/window.innerHeight)*8;

    stars.forEach((star,index)=>{

        const speed=(index%5)+1;

        star.style.transform=
        `translate(${moveX/speed}px,${moveY/speed}px)`;

    });

});

/* ==========================
   WINDOW RESIZE
========================== */

window.addEventListener("resize",()=>{

    if(starsContainer){

        starsContainer.innerHTML="";

        createStars();

    }

});


/* =====================================================
   GALLERY LIGHTBOX + SLIDESHOW
===================================================== */

"use strict";

/* ==========================
   GALLERY
========================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

let currentImage = 0;
let autoSlide = null;

/* ==========================
   CREATE LIGHTBOX
========================== */

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-overlay"></div>

<div class="lightbox-content">

<button id="prevImage">❮</button>

<img id="lightboxImg" src="" alt="Gallery Image">

<button id="nextImage">❯</button>

<span id="closeLightbox">&times;</span>

</div>

`;

document.body.appendChild(lightbox);

/* ==========================
   DOM
========================== */

const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

/* ==========================
   CSS FROM JS
========================== */

lightbox.style.cssText = `
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
display:none;
justify-content:center;
align-items:center;
background:rgba(0,0,0,.92);
z-index:999999;
`;

document.querySelector(".lightbox-content").style.cssText = `
position:relative;
display:flex;
align-items:center;
gap:20px;
`;

lightboxImg.style.cssText = `
max-width:80vw;
max-height:80vh;
border-radius:20px;
box-shadow:0 0 40px rgba(255,255,255,.25);
`;

closeLightbox.style.cssText = `
position:absolute;
top:-50px;
right:0;
font-size:45px;
cursor:pointer;
color:white;
`;

prevImage.style.cssText = `
font-size:40px;
cursor:pointer;
background:none;
border:none;
color:white;
`;

nextImage.style.cssText = prevImage.style.cssText;

/* ==========================
   OPEN IMAGE
========================== */

function openImage(index){

currentImage=index;

lightbox.style.display="flex";

lightboxImg.src=galleryImages[currentImage].src;

}

/* ==========================
   CLOSE
========================== */

function closeBox(){

lightbox.style.display="none";

}

/* ==========================
   NEXT
========================== */

function next(){

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

lightboxImg.src=galleryImages[currentImage].src;

}

/* ==========================
   PREVIOUS
========================== */

function previous(){

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

lightboxImg.src=galleryImages[currentImage].src;

}

/* ==========================
   EVENTS
========================== */

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

openImage(index);

});

});

closeLightbox.addEventListener("click",closeBox);

nextImage.addEventListener("click",next);

prevImage.addEventListener("click",previous);

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeBox();

}

});

/* ==========================
   KEYBOARD
========================== */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display!=="flex") return;

if(e.key==="Escape"){

closeBox();

}

if(e.key==="ArrowRight"){

next();

}

if(e.key==="ArrowLeft"){

previous();

}

});

/* ==========================
   AUTO SLIDESHOW
========================== */

function startSlide(){

clearInterval(autoSlide);

autoSlide=setInterval(()=>{

if(lightbox.style.display==="flex"){

next();

}

},3000);

}

startSlide();


/* =====================================================
   LOVE LETTER + LOVE TIMER + MUSIC PLAYER
===================================================== */

"use strict";

/* ==========================
   DOM
========================== */

const loveLetter = document.getElementById("loveLetter");
const music = document.getElementById("music");

const dayBox = document.getElementById("days");
const hourBox = document.getElementById("hours");
const minuteBox = document.getElementById("minutes");
const secondBox = document.getElementById("seconds");

/* ==========================
   LOVE LETTER TYPE EFFECT
========================== */

if (loveLetter) {

    const originalText = loveLetter.textContent.trim();

    loveLetter.textContent = "";

    let letterIndex = 0;

    function typeLetter() {

        if (letterIndex < originalText.length) {

            loveLetter.textContent += originalText.charAt(letterIndex);

            letterIndex++;

            setTimeout(typeLetter, 20);

        }

    }

    const observer = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            typeLetter();

            observer.disconnect();

        }

    });

    observer.observe(loveLetter);

}

/* ==========================
   LOVE TIMER
========================== */


const loveDate = new Date(2026, 0, 1, 0, 0);

function updateLoveTimer() {

    if (
        !dayBox ||
        !hourBox ||
        !minuteBox ||
        !secondBox
    ) return;

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / 86400000);

    const hours = Math.floor(diff / 3600000) % 24;

    const minutes = Math.floor(diff / 60000) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    dayBox.textContent =
        String(days).padStart(3, "0");

    hourBox.textContent =
        String(hours).padStart(2, "0");

    minuteBox.textContent =
        String(minutes).padStart(2, "0");

    secondBox.textContent =
        String(seconds).padStart(2, "0");

}

updateLoveTimer();

setInterval(updateLoveTimer, 1000);

/* ==========================
   MUSIC PLAYER
========================== */

if (music) {

    music.volume = 0.5;

    document.body.addEventListener("click", () => {

        music.play().catch(() => {});

    }, { once: true });

}

/* ==========================
   PLAY / PAUSE BY SPACEBAR
========================== */

document.addEventListener("keydown", (e) => {

    if (!music) return;

    if (e.code === "Space") {

        e.preventDefault();

        if (music.paused) {

            music.play();

        } else {

            music.pause();

        }

    }

});

/* ==========================
   FADE IN VOLUME
========================== */

function fadeInMusic() {

    if (!music) return;

    music.volume = 0;

    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        music.volume = volume;

        if (volume >= 0.5) {

            clearInterval(fade);

        }

    }, 200);

}


/* ==========================
   MUSIC STATUS
========================== */

if (music) {

    music.addEventListener("play", () => {

        console.log("🎵 Music Playing");

    });

    music.addEventListener("pause", () => {

        console.log("⏸ Music Paused");

    });

}

/* =====================================================
   YES CELEBRATION + NO BUTTON + HEART BLAST
===================================================== */

"use strict";

/* ==========================
   CELEBRATION
========================== */

function celebrate(){

    // Hearts

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top=Math.random()*100+"vh";

        heart.style.fontSize=(20+Math.random()*40)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="999999";

        heart.style.transition="2s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translateY(-250px)
             rotate(${Math.random()*720}deg)
             scale(2)`;

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}

/* ==========================
   YES BUTTON
========================== */

function proposalAccepted(){

    celebrate();

    document.body.style.overflow="hidden";

    setTimeout(()=>{

        alert("💍❤️ Congratulations! Forever Begins Today ❤️💍");

        document.body.style.overflow="auto";

    },800);

}

/* ==========================
   EVENTS
========================== */

if(yesBtn){

yesBtn.addEventListener("click",proposalAccepted);

}

if(proposalYes){

proposalYes.addEventListener("click",proposalAccepted);

}

/* ==========================
   SMART NO BUTTON
========================== */

function moveButton(btn){

const padding=100;

const x=Math.random()*
(window.innerWidth-padding);

const y=Math.random()*
(window.innerHeight-padding);

btn.style.position="fixed";

btn.style.left=x+"px";

btn.style.top=y+"px";

}

if(noBtn){

noBtn.addEventListener("mouseenter",()=>{

moveButton(noBtn);

});

}

if(proposalNo){

proposalNo.addEventListener("mouseenter",()=>{

moveButton(proposalNo);

});

}

/* ==========================
   BUTTON SHAKE
========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{transform:"rotate(0deg)"},

{transform:"rotate(2deg)"},

{transform:"rotate(-2deg)"},

{transform:"rotate(0deg)"}

],{

duration:250

});

});

});


/* =====================================================
   FINAL POLISH + SCROLL REVEAL + LOCAL STORAGE
===================================================== */

"use strict";

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
".gallery-card, .timeline-item, .quote-card, .letter, .time-box, .ring-box, .music-player, .proposal-card"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    el.classList.add("fade-up");

    revealObserver.observe(el);

});

/* ==========================
   SAVE YES RESPONSE
========================== */

function saveProposal(){

    localStorage.setItem(
        "proposalAccepted",
        "true"
    );

    localStorage.setItem(
        "proposalDate",
        new Date().toLocaleString()
    );

}

if(typeof proposalYes!=="undefined" && proposalYes){

    proposalYes.addEventListener("click",saveProposal);

}

if(typeof yesBtn!=="undefined" && yesBtn){

    yesBtn.addEventListener("click",saveProposal);

}

/* ==========================
   RESTORE MESSAGE
========================== */

window.addEventListener("load",()=>{

    if(localStorage.getItem("proposalAccepted")==="true"){

        console.log(
        "❤️ Proposal already accepted on:",
        localStorage.getItem("proposalDate")
        );

    }

});

/* ==========================
   BUTTON CLICK EFFECT
========================== */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.9)"
            },

            {
                transform:"scale(1.08)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:250

        });

    });

});

/* ==========================
   IMAGE LAZY ANIMATION
========================== */

document.querySelectorAll(".gallery-card img").forEach(img=>{

    img.loading="lazy";

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("%c❤️ Forever With You ❤️",
"color:#ff2d75;font-size:24px;font-weight:bold;");

console.log(
"Premium Proposal Website Loaded Successfully."
);

/* ==========================
   END OF PROJECT
========================== */