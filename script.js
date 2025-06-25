const canvas = document.querySelector(".white-canvas")
const size16x16 = 256;

for(let i = 0; i < size16x16; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    canvas.appendChild(pixel);
}