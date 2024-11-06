export function menu() {
    let contentDiv = document.querySelector("#content")

    let title = document.createElement("h1")
    title.textContent = "Menu"

    let menuList = document.createElement("ul")

    let menu = ["Cheese", "More Cheese", "Less Cheese", "Acceptable Amount of Cheese"]

    for (let item of menu) {
        let listItem = document.createElement("li")
        listItem.textContent = item

        menuList.appendChild(listItem)
    }

    contentDiv.appendChild(title)
    contentDiv.appendChild(menuList)
}