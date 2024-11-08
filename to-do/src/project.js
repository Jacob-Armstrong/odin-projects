import Task from "./task";

export class Project {
  constructor() {
    this._tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    this._tasks.push(new Task(title, description, dueDate, priority));
  }

  deleteTask(index) {
    this._tasks.splice(index, 1);
  }

  updateTask(index, title, description, dueDate, priority) {
    this._tasks[index].title = title;
    this._tasks[index].description = description;
    this._tasks[index].dueDate = dueDate;
    this._tasks[index].priority = priority;
  }

  getTasks() {
    return this._tasks;
  }
}
