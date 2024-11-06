export function about() {
    let contentDiv = document.querySelector("#content")

    let title = document.createElement("h1")
    title.textContent = "About"

    let description = document.createElement("p")
    description.textContent = `This restaurant was founded like 30 seconds ago.\nWe make different amounts of cheese!`

    contentDiv.appendChild(title)
    contentDiv.appendChild(description)
}