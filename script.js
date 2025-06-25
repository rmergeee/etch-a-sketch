const canvas = document.querySelector(".white-canvas");
const btn = document.querySelector(".changeSize");
const clearButton = document.querySelector(".clearButton");
let defaultSize = 8;

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
        if(target.style.backgroundColor === "") {
            target.style.backgroundColor = getRandomColor();
            target.style.opacity = 0.1;
        } else if(target.style.opacity !== "" && Number(target.style.opacity) < 1){
            target.style.opacity = Number(target.style.opacity) + 0.1;
        }
    }
});

btn.addEventListener("click", changeSizeCanvas);
clearButton.addEventListener("click", clearCanvas);

function changeSizeCanvas() {
    canvas.innerHTML = "";

    do {
        size = prompt("Select the size of the canvas side(no more than 100): ");
    } while (size > 100 && size > 0);
    defaultSize = size;

    for(let i = 0; i < defaultSize*defaultSize; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.flexBasis = 100 / defaultSize + "%";
        pixel.style.aspectRatio ="1 / 1";
        canvas.appendChild(pixel);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function clearCanvas() {
    canvas.innerHTML = "";
    for(let i = 0; i < defaultSize*defaultSize; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.flexBasis = 100 / defaultSize + "%";
        pixel.style.aspectRatio ="1 / 1";
        canvas.appendChild(pixel);
    }
}
