const btn = document.querySelector("button");
const head = document.querySelector("h1");
const para = document.querySelector("p");

btn.addEventListener("click", ()=> {
  head.style.color = "blue"
  para.style.color = "white"
  para.style.background = "grey";
})