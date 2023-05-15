const button = document.querySelector(".butt");
button.addEventListener("click", createH1);
function createH1() {
  const h1 = document.createElement("h1");
  h1.innerText = `This is an h1 tag`;
  const body = document.querySelector("body");
  body.appendChild(h1);
  button.disabled = true;
}
