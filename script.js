const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {

document.body.classList.toggle("dark");

btn.textContent =
document.body.classList.contains("dark")
? "☀️"
: "🌙";

});

const reveals = document.querySelectorAll(".reveal");

function reveal(){

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add("active");
}

});

}

window.addEventListener("scroll",reveal);

reveal();