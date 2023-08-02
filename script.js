const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".buttons .refresh-btn");
const copyBtn = document.querySelector(".buttons .copy-btn");

const getRandomColor = () =>{
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const copyCode = () =>{
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1500)
}
const generateGradient = (isRandom) => {
    if (isRandom){
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}


colorInputs.forEach(input =>{
    input.addEventListener("input", () => generateGradient(false));
})

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", () => copyCode(true));