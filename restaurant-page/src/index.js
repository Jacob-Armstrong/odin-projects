import { homepage } from "./homepage"
import { menu } from "./menu"
import { about } from "./about"

let contentDiv = document.querySelector("#content")

let homeButton = document.querySelector("#home-btn")
let menuButton = document.querySelector("#menu-btn")
let aboutButton = document.querySelector("#about-btn")

console.log("Hello from index.js!")

homepage()

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = ""
    homepage()
})
menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = ""
    menu()
})
aboutButton.addEventListener("click", () => {
    contentDiv.innerHTML = ""
    about()
})