const gradientBox = document.querySelector(".gradient_box");
const selectMenu = document.querySelector(".select_box select");
const colorInputs =document.querySelectorAll(".colors input");
const textarea =document.querySelector("textarea");
const refreshBtn =document.querySelector(".refresh");
const copyBtn =document.querySelector(".copy");


const getRandomColor =() => {
  //  Generating a random color in hexadecimal format. Example: #5665e9
const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}
const generateGradient = (isRandom)  => {
  if(isRandom) {
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }

  // Creating a gradient string using the select menu value with color values
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`
}

const copyCode =() => {
  // Copying textarea value and updateting the copy button text
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}

colorInputs.forEach(input => {
  //Calling generateGradient function on each color input clicks
  input.addEventListener("input", () => generateGradient (false));
});
selectMenu.addEventListener("change", () => generateGradient (true));
refreshBtn.addEventListener("click", () => {
  generateGradient(true);
});
copyBtn.addEventListener("click", copyCode);