
const container = document.querySelector(".container")
const promptBtn = document.querySelector(".prompt-btn")

const containerWidth = 400

function promptSize() {
    let gridNum = prompt(`Choose your grid size! (e.g. 50 = 50x50)\nMust be between 0 and 100.`)

    while (gridNum < 0 || gridNum > 100) {
        alert("Invalid size! Must be between 0 and 100.")
        gridNum = prompt("How many pixels would you like? (e.g. 50 = 50x50)")
    }

    let pixelSize = containerWidth / gridNum

    console.log(`Gridnum: ${gridNum}`)
    console.log(`Pixelsize: ${pixelSize}`)

    createGrid(pixelSize, gridNum)
}

promptBtn.addEventListener("click", () => {
    promptSize()
})

function createGrid(pixelSize, gridNum) {

    container.innerHTML = ""

    for (let i = 0; i < gridNum**2; i++) {
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.style.width = `${pixelSize}px`
        pixel.style.height = `${pixelSize}px`
    
        container.appendChild(pixel)
    }

    let pixels = document.querySelectorAll(".pixel")

    Array.from(pixels, e => {
        e.addEventListener("mouseenter", () =>{
            e.classList.add("black")
            let currentOpacity = parseFloat(e.style.opacity) || 0;  // Get current opacity
            if (currentOpacity < 1) {  // Cap opacity at 1
                e.style.opacity = currentOpacity + 0.1;  // Increment opacity
            }
        })
    })
}

createGrid(4, 100)
