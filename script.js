function toggleMenu() {
  let nav = document.getElementById("navLinks");
  let toggle = document.querySelector(".menu-toggle");
  
  nav.classList.toggle("show");
  toggle.classList.toggle("active");
}
// typing
const text = ["Android Developer", "Java Programmer", "UI Designer"];
let i = 0, j = 0, del = false;

function type() {
  let current = text[i];
  j = del ? j - 1 : j + 1;

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!del && j === current.length) {
    del = true;
    setTimeout(type, 1000);
    return;
  }

  if (del && j === 0) {
    del = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, del ? 50 : 100);
}
type();

// particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({length:100}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  size: Math.random()*2,
  speed: Math.random()*0.5
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.y += p.speed;
    if(p.y>canvas.height) p.y=0;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();