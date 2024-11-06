export function homepage() {
    let contentDiv = document.querySelector("#content");

    let title = document.createElement("h1")
    title.textContent = "Welcome to My Restaurant"

    let description = document.createElement("p")
    description.textContent = "This place is so cool. The food is great :)"

    contentDiv.appendChild(title)
    contentDiv.appendChild(description)
};