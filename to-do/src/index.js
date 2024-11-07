import { Project } from "./project"
import "./style.css"
import Task from "./task"

let newProjectBtn = document.querySelector("#new-project-btn")
let newTaskDialog = document.querySelector("#new-task-dialog")
let newTaskForm = document.querySelector("#new-task-form")

let titleInput = document.querySelector("#title-input")
let descriptionInput = document.querySelector("#description-input")
let dateInput = document.querySelector("#date-input")
let priorityInput = document.querySelector("#priority-input")

let Projects = []

loadProjectsFromLocalStorage()
displayProjects()

newProjectBtn.addEventListener("click", () => {
    addNewProject()
})

function addNewProject() {
    Projects.push(new Project())
    displayProjects()
}

function closeAndResetModal() {
    newTaskDialog.close()
    titleInput.value = ""
    descriptionInput.value = ""
    dateInput.value = ""
    priorityInput.value = ""
}

function displayProjects() {

    let projectGrid = document.querySelector(".project-grid")
    projectGrid.innerHTML = ""

    for (let project of Projects) {
        
        let projdiv = document.createElement("div")
        projdiv.classList.add("project")

        let newTaskBtn = document.createElement("button")
        newTaskBtn.classList.add("new-task-btn")
        newTaskBtn.textContent = "New Task"

        newTaskBtn.addEventListener("click", () => {

            let submitBtn = document.createElement("button")
            submitBtn.textContent = "Submit"

            submitBtn.addEventListener("click", (e) => {
                e.preventDefault()

                if (newTaskForm.checkValidity()) {

                    project.addTask(titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
                    closeAndResetModal()
                    displayProjects()

                    newTaskForm.removeChild(submitBtn)
                }

            })

            newTaskForm.appendChild(submitBtn)
            newTaskDialog.showModal()

        })

        projdiv.appendChild(newTaskBtn)

        console.log(`About to try and display tasks for this project`)
        console.log(project)

        displayTasks(project, projdiv)

        projectGrid.appendChild(projdiv)
    }

    saveProjectsToLocalStorage()
}

function displayTasks(project, projdiv) {
    let tasks = project.getTasks()
        
    for (let i = 0; i < tasks.length; i++) {

        let taskDiv = document.createElement("div")
        taskDiv.classList.add("task")

        let title = document.createElement("h3")
        title.textContent = tasks[i].title

        let description = document.createElement("p")
        description.textContent = tasks[i].description

        let dueDate = document.createElement("p")
        dueDate.textContent = tasks[i].dueDate

        let priority = document.createElement("p")
        priority.textContent = `Priority: ${tasks[i].priority}`

        let taskButtondiv = document.createElement("div")
        taskButtondiv.classList.add("task-button-div")

        let editButton = document.createElement("button")
        editButton.classList.add("task-btn")
        editButton.textContent = "Edit"

        editButton.addEventListener("click", () => {

            let submitBtn = document.createElement("button")
            submitBtn.textContent = "Submit"

            titleInput.value = tasks[i].title
            descriptionInput.value = tasks[i].description
            dateInput.value = tasks[i].dueDate
            priorityInput.value = tasks[i].priority

            submitBtn.addEventListener("click", (e) => {
                e.preventDefault()

                if (newTaskForm.checkValidity()) {
                    project.updateTask(i, titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
                    displayProjects()
                    closeAndResetModal()

                    newTaskForm.removeChild(submitBtn)
                }
            })

            newTaskForm.appendChild(submitBtn)

            newTaskDialog.showModal()

        })

        let deleteButton = document.createElement("button")
        deleteButton.classList.add("task-btn")
        deleteButton.textContent = "Delete"

        deleteButton.addEventListener("click", () => {
            project.deleteTask(i)
            displayProjects()
        })

        taskButtondiv.appendChild(editButton)
        taskButtondiv.appendChild(deleteButton)

        taskDiv.appendChild(title)
        taskDiv.appendChild(description)
        taskDiv.appendChild(dueDate)
        taskDiv.appendChild(priority)
        taskDiv.appendChild(taskButtondiv)
        

        projdiv.appendChild(taskDiv)
    }
}

// Save Projects to localStorage
function saveProjectsToLocalStorage() {
    const projectsData = Projects.map(project => ({
        tasks: project.getTasks().map(task => ({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
            complete: task.complete
        }))
    }))
    localStorage.setItem("projects", JSON.stringify(projectsData))
}

// Load Projects from localStorage
function loadProjectsFromLocalStorage() {
    const projectsData = JSON.parse(localStorage.getItem("projects"))
    if (projectsData) {
        Projects = projectsData.map(projectData => {
            const project = new Project()
            projectData.tasks.forEach(taskData => {
                project.addTask(taskData.title, taskData.description, taskData.dueDate, taskData.priority, taskData.complete)
            })
            return project
        })
    }
}