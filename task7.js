const inputFontSize= document.querySelector("input#font-size-control");
const textFontSize = document.querySelector("span#text");

inputFontSize.addEventListener("input", () => {
  textFontSize.style.fontSize = inputFontSize.value+'px';
});