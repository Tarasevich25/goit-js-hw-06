const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onInputChange = (event) => {
  textEl.style.fontSize = inputEl.value + "px";
};
inputEl.addEventListener("input", onInputChange);
