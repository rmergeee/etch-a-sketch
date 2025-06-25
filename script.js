const canvas = document.querySelector(".white-canvas")
const defaultSize = 16;

console.log(canvas);

for(let i = 0; i < defaultSize*defaultSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    canvas.appendChild(pixel);
}

canvas.addEventListener('mouseout', (event) => {
    let target = event.target;
    if(target.className === "pixel") {
        target.style.backgroundColor = "black";
    }
});