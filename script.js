/* ==================================================
   ELIE LANDING PAGE
================================================== */

/* ---------- PROFILE ---------- */

const profiles = [
    "images/1.webp",
    "images/2.webp",
    "images/3.webp",
    "images/4.webp",
    "images/5.webp",
    "images/6.webp",
    "images/7.webp",
    "images/8.webp",
    "images/9.webp",
    "images/10.webp"
];

const profileImage = document.getElementById("profileImage");

const randomIndex = Math.floor(Math.random() * profiles.length);

console.log("Random:", randomIndex);
console.log("Image:", profiles[randomIndex]);

profileImage.src = profiles[randomIndex] + "?t=" + Date.now();

/* ---------- BACKGROUND ---------- */

const backgrounds = [
    "images/1.webp",
    "images/2.webp",
    "images/3.webp",
    "images/4.webp",
    "images/5.webp",
    "images/6.webp",
    "images/7.webp",
    "images/8.webp",
    "images/9.webp",
    "images/10.webp"
];

const bg = document.getElementById("bg");

let bgIndex = Math.floor(Math.random()*backgrounds.length);

function changeBackground(){

    bg.style.opacity = 0;

    setTimeout(()=>{

        bg.style.backgroundImage =
        `url(${backgrounds[bgIndex]})`;

        bg.style.opacity = 1;

        bgIndex++;

        if(bgIndex >= backgrounds.length){

            bgIndex = 0;

        }

    },500);

}

changeBackground();

setInterval(changeBackground,8000);


/* ---------- COUNTDOWN ---------- */

const WA_URL =
"https://lola-604495.happy-talking.org/b/EEjph8EZgWshD7";

let seconds = 10;

const timer = document.getElementById("timer");

const countdown = setInterval(()=>{

    seconds--;

    timer.textContent = seconds;

    if(seconds <= 0){

        clearInterval(countdown);

        window.location.href = WA_URL;

    }

},1000);


/* ---------- STOP REDIRECT ---------- */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        clearInterval(countdown);

    });

});


/* ---------- PARTICLES ---------- */

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = innerWidth;

    canvas.height = innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particleCount =
window.innerWidth < 768 ? 35 : 80;

const particles = [];

for(let i=0;i<particleCount;i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2+1,

        dx:(Math.random()-.5)*0.4,

        dy:(Math.random()-.5)*0.4

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fillStyle="rgba(255,255,255,.5)";

        ctx.fill();

        p.x += p.dx;

        p.y += p.dy;

        if(p.x<0 || p.x>canvas.width) p.dx *= -1;

        if(p.y<0 || p.y>canvas.height) p.dy *= -1;

    });

    requestAnimationFrame(animate);

}

animate();


/* ---------- DESKTOP PARALLAX ---------- */

if(window.innerWidth > 768){

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*15;

    const y=(e.clientY/window.innerHeight-.5)*15;

    bg.style.transform=
    `scale(1.12) translate(${x}px,${y}px)`;

});

}


/* ---------- MOBILE PARALLAX ---------- */

if(window.DeviceOrientationEvent){

window.addEventListener("deviceorientation",(e)=>{

    const x=(e.gamma||0)/4;

    const y=(e.beta||0)/6;

    bg.style.transform=
    `scale(1.12) translate(${x}px,${y}px)`;

});

}
