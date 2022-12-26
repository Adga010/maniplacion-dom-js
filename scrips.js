const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#button");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

btn.addEventListener("click", sumarInputs);

function sumarInputs(event) {
  const sumarInputs = input1.value + input2.value;
  result.innerHTML = "Resultado: " + sumarInputs;
}
