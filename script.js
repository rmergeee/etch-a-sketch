const canvas = document.querySelector(".white-canvas");
const btn = document.querySelector(".changeSize");
let defaultSize = 8;

console.log(canvas);

for(let i = 0; i < defaultSize*defaultSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.flexBasis = 100 / defaultSize + "%";
    pixel.style.aspectRatio ="1 / 1";
    canvas.appendChild(pixel);
    
}

canvas.addEventListener('mouseout', (event) => {
    let target = event.target;
    if(target.className === "pixel") {
        target.style.backgroundColor = "black";
    }
});

btn.addEventListener("click", changeSizeCanvas)

function changeSizeCanvas() {
    canvas.innerHTML = "";

    do {
        size = prompt("Select the size of the canvas side(no more than 100): ");
    } while (size > 100);
    defaultSize = size;

    for(let i = 0; i < defaultSize*defaultSize; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.flexBasis = 100 / defaultSize + "%";
        pixel.style.aspectRatio ="1 / 1";
        canvas.appendChild(pixel);
        
    }
}

